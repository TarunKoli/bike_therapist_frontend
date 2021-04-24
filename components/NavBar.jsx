import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
import navStyle from "../styles/NavBar.module.css";
let socket;

const base64ToUint8Array = (base64) => {
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(b64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const NavBar = () => {
  const [control, setControl] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [userData, setUserData] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      // run only in browser
      navigator.serviceWorker.ready.then((reg) => {
        reg.pushManager.getSubscription().then((sub) => {
          if (
            sub &&
            !(
              sub.expirationTime &&
              Date.now() > sub.expirationTime - 5 * 60 * 1000
            )
          ) {
            setSubscription(sub);
            setIsSubscribed(true);
          }
        });
        reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: base64ToUint8Array(
            process.env.NEXT_PUBLIC_PUSH_PUBLIC_KEY
          ),
        });
      });
    }
  }, []);

  useEffect(() => {
    let userId = window.localStorage.getItem("userId");
    socket = io(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
    axios({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/is-user`,
      method: "POST",
      data: {
        userId: userId,
      },
      withCredentials: true,
    })
      .then((res) => {
        setUserData(res.data.isLoggedin);
        if (res.data.isLoggedin) {
          socket.on("notification", (payload) => {
            const audio = new Audio("/alert.mp3");
            audio.play();
            sendNotificationButtonOnClick();
            // alert(payload.msg);
          });
        }
      })
      .catch((err) => {
        setUserData(err.response.data.isLoggedin);
      });
    return () => {
      socket.off("notification");
    };
  });

  const sendNotificationButtonOnClick = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        subscription,
      }),
    });
  };

  const handleLogout = () => {
    if (userData) {
      axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/logout`,
        method: "GET",
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            window.localStorage.removeItem("userId");
            router.reload("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleControl = () => {
    setControl((prev) => !prev);
  };
  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };
  return (
    <nav className={navStyle.myNav}>
      <ul className={navStyle.navContainer}>
        <li className={navStyle.brand}>
          <Link href="/">
            <a className={navStyle.logo}>
              <span className={navStyle.logoStyle}>Bike</span>
              <strong>Therapist</strong>
            </a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/about">
            <a>about us</a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/services">
            <a>services</a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/how-it-works">
            <a>how it works</a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/pricing">
            <a>pricing</a>
          </Link>
        </li>
        <li className={navStyle.navLink}>
          <Link href="/contact-us">
            <a>contact us</a>
          </Link>
        </li>

        {userData && (
          <li className={`${navStyle.navLink} ${navStyle.drowpown}`}>
            <a onClick={handleDropdown}>admin &nbsp;</a>
            <i className="fas fa-caret-down" onClick={handleDropdown}></i>
            <ul
              className={`${navStyle.drowDownMenu} ${
                dropdown ? null : navStyle.hide
              }`}
            >
              <Link href="/clients">
                <li>bookings</li>
              </Link>
              <Link href="/admin-dashboard">
                <li>DashBoard</li>
              </Link>
            </ul>
          </li>
        )}
        {userData ? (
          <li className={navStyle.searchBtn}>
            <button onClick={handleLogout}>logout</button>
          </li>
        ) : (
          <li className={navStyle.searchBtn}>
            <Link href="/authentication">
              <button>login as admin</button>
            </Link>
          </li>
        )}

        <li className={navStyle.menu}>
          <div
            className={`${navStyle.curtain} ${
              control ? navStyle.active : null
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
            <ul>
              <li>
                <Link href="/">
                  <a onClick={handleControl}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a onClick={handleControl}>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a onClick={handleControl}>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works">
                  <a onClick={handleControl}>How It Works ?</a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a onClick={handleControl}>Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <a onClick={handleControl}>Contact Us</a>
                </Link>
              </li>
              {userData && (
                <li className={`${navStyle.drowpown} ${navStyle.dropdownSm}`}>
                  <div>
                    <a onClick={handleDropdown}>admin &nbsp;</a>
                    <i
                      className="fas fa-caret-down"
                      onClick={handleDropdown}
                    ></i>
                  </div>
                  <ul
                    className={`${navStyle.drowDownMenu} ${
                      dropdown ? null : navStyle.hide
                    }`}
                  >
                    <Link href="/clients">
                      <li onClick={handleControl}>bookings</li>
                    </Link>
                    <Link href="/admin-dashboard">
                      <li onClick={handleControl}>DashBoard</li>
                    </Link>
                  </ul>
                </li>
              )}
              <li>
                {userData ? (
                  <button
                    className={`btn btn-warning text-dark btn-lg ${navStyle.loginBtn}`}
                    onClick={handleLogout}
                  >
                    logout
                  </button>
                ) : (
                  <Link href="/authentication">
                    <button
                      className={`btn btn-warning text-dark btn-lg ${navStyle.loginBtn}`}
                      onClick={handleControl}
                    >
                      login as admin
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className={navStyle.hamburger} onClick={handleControl}>
            <div>-</div>
            <div>-</div>
            <div>-</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
