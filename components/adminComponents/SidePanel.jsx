import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { storage } from "../../firebase";
import styles from "../../styles/adminDashboard/dashboard.module.css";
import { SideContext } from "./SideContext";

const SidePanel = ({ adminRes }) => {
  const [hide, setHide] = useContext(SideContext);
  const [userData, setUserData] = useState(false);
  const [name, setName] = useState(adminRes.name.toString());
  const [isReadOnly, setReadOnly] = useState(false);
  const [date, setDate] = useState(adminRes.dob.toString());
  const [email, setEmail] = useState(adminRes.email.toString());
  const [phone, setPhone] = useState(adminRes.phone.toString());
  const [showBtn, setShowBtn] = useState(false);
  const [img, setImg] = useState(adminRes.profileImage);
  const [img2, setImg2] = useState(adminRes.profileImage);
  const [progress, setProgress] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    let userId = window.localStorage.getItem("userId");
    axios({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/is-user`,
      method: "POST",
      data: {
        userId: userId,
      },
      withCredentials: true,
    })
      .then((res) => {
        setImgUrl(res.data.profileImg);
        setUserData(res.data.isLoggedin);
      })
      .catch((err) => {
        setUserData(err.response.data.isLoggedin);
      });
  });

  useEffect(() => {
    if (
      name !== adminRes.name ||
      phone !== adminRes.phone.toString() ||
      email !== adminRes.email ||
      date !== adminRes.dob ||
      img !== adminRes.profileImage
    ) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, [name, email, phone, date, img]);

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

  const handleHide = () => {
    setHide((prev) => !prev);
  };

  function handleReadOnly(e) {
    setReadOnly((prev) => !prev);
    document.getElementById(e.target.id).focus();

    const nameTag = document.getElementById("name");
    const date = document.getElementById("date");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    if (isReadOnly) {
      nameTag.readOnly = isReadOnly;
      date.readOnly = isReadOnly;
      email.readOnly = isReadOnly;
      phone.readOnly = isReadOnly;
    } else {
      nameTag.readOnly = isReadOnly;
      date.readOnly = isReadOnly;
      email.readOnly = isReadOnly;
      phone.readOnly = isReadOnly;
    }
  }

  function handleSave() {
    if (
      img &&
      (img.type === "image/svg+xml" ||
        img.type === "image/png" ||
        img.type === "image/jpg" ||
        img.type === "image/jpeg")
    ) {
      const storageRef = storage.ref(`images/${img.name}`).put(img);
      storageRef.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log("firebase image upload error : ", error);
        },
        () => {
          storage
            .ref("images")
            .child(img.name)
            .getDownloadURL()
            .then((imgUrl) => {
              if (imgUrl) {
                console.log(imgUrl);
                axios({
                  url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/change-image`,
                  method: "POST",
                  data: {
                    profileImage: imgUrl,
                  },
                  withCredentials: true,
                })
                  .then((res) => {
                    alert("profile picture changed");
                    location.reload();
                  })
                  .catch((err) => console.log(err));
              }
            })
            .catch((err) => console.log(err));
        }
      );
    } else {
      axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/update-details`,
        method: "POST",
        data: {
          email,
          name,
          date,
          phone,
        },
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 201) {
            window.alert(res.data.msg);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className={`${styles.sidepanel} ${hide ? styles.hide2 : null}`}>
      <span onClick={handleHide}>X</span>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          {imgUrl ? (
            <img src={img2} alt="avatar image" />
          ) : (
            <img src="/avatar.svg" alt="avatar image" />
          )}
          <div className={styles.uploadPic}>
            <form
              encType="multipart/form-data"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="profile-picture">
                <p>
                  <i className="fas fa-camera fa-2x"></i>
                </p>
                <input
                  type="file"
                  id="profile-picture"
                  onChange={(e) => {
                    setImgUrl(URL.createObjectURL(e.target.files[0]));
                    setImg(e.target.files[0]);
                    const reader = new FileReader();
                    reader.onload = () => {
                      if (reader.readyState === 2) {
                        setImg2(reader.result);
                      }
                    };
                    reader.readAsDataURL(e.target.files[0]);
                  }}
                />
              </label>
            </form>
          </div>
        </div>
        <div>
          <h1 className={styles.name}>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              readOnly
            />
            <i
              className={`fas fa-pencil-alt ${
                isReadOnly ? "text-white" : "text-secondary"
              }`}
              id="name"
              onClick={handleReadOnly}
            ></i>
          </h1>
          <p>BikeTherapist</p>
        </div>
      </div>

      <div className={styles.details}>
        <table>
          <tbody>
            <tr>
              <td>DOB:</td>
              <td>
                <input
                  type="text"
                  id="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  placeholder="dd-mm-yyyy"
                  readOnly
                />
              </td>
              <td>
                <i
                  className={`fas fa-pencil-alt ${
                    isReadOnly ? "text-white" : "text-secondary"
                  }`}
                  id="date"
                  onClick={handleReadOnly}
                ></i>
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="test@test.com"
                  readOnly
                />
              </td>
              <td>
                <i
                  className={`fas fa-pencil-alt ${
                    isReadOnly ? "text-white" : "text-secondary"
                  }`}
                  id="email"
                  onClick={handleReadOnly}
                ></i>
              </td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="09xxxxxxx1"
                  readOnly
                />
              </td>
              <td>
                <i
                  className={`fas fa-pencil-alt ${
                    isReadOnly ? "text-white" : "text-secondary"
                  }`}
                  id="phone"
                  onClick={handleReadOnly}
                ></i>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                {showBtn && (
                  <button
                    className="btn btn-outline-warning btn-lg"
                    onClick={handleSave}
                  >
                    save
                  </button>
                )}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.bottom}>
        <Link href="/payments">
          <div>
            <i className="fas fa-rupee-sign"></i> Payments
          </div>
        </Link>
        <Link href="/clients">
          <div>
            <i className="fas fa-users"></i> Clients
          </div>
        </Link>
        <div onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </div>
      </div>
    </div>
  );
};
export default SidePanel;
