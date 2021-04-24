import { useState, useEffect } from "react";
import style from "../../styles/contactStyles/Landing.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Landing = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [msg, setMsg] = useState();
  const [error, setError] = useState(null);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);

  const handleContact = async (e) => {
    setSpin((prev) => !prev);
    try {
      const Contacted = await axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact-us`,
        data: {
          name,
          email,
          msg,
        },
        method: "POST",
        withCredentials: true,
      });

      if (Contacted.status === 200) {
        console.log("entered");
        setName("");
        setEmail("");
        setMsg("");
        setSpin((prev) => !prev);
        toast.success(
          "Your query has been delivered to admin,we'll contact you soon with detail",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    } catch (err) {
      setSpin((prev) => !prev);
      setError(err.response.data.msg);
    }
  };
  return (
    <section id="contactLanding" className={style.contactLanding}>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={style.myToast}
      />
      <div className={style.contactContainer}>
        <div className={style.leftCol}>
          <div className={style.leftTitle}>
            <h1>
              <span>let's</span> talk
            </h1>
            <p>
              To request a quote or want to meet up for coffee, contact us
              directly or fill out the form and we will get back to you promptly
            </p>
          </div>
          <div className={style.leftForm}>
            <form className={style.actualForm}>
              <div className={style.formGroup}>
                <label htmlFor="name">your name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name ? name : ""}
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="email">your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email ? email : ""}
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="message">your message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="20"
                  rows="5"
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                  value={msg ? msg : ""}
                ></textarea>
              </div>
            </form>
          </div>
          <div className={style.leftBtnGrp}>
            <button
              onClick={handleContact}
              className={spin ? `${style.hide}` : ``}
            >
              <span>send</span> message
            </button>

            <button
              className={spin ? `${style.spinner}` : `${style.hide}`}
              type="button"
              disabled
            >
              <span
                className={`spinner-border spinner-border-sm ${style.spin}`}
                role="status"
                aria-hidden="true"
              ></span>
              Sending...
            </button>
          </div>
        </div>
        <div className={style.rightCol}>
          <div className={style.imgDiv}>
            <img src="/message.svg" alt="message" />
          </div>
          <div className={style.addressDiv}>
            <p>
              <i className="fas fa-map-marker-alt text-warning"></i>&nbsp;151
              New Park Ave, Hartford,CT 06106, United States
            </p>
            <p>
              <i className="fas fa-phone text-warning"></i>&nbsp;p+1 (203)
              302-9545
            </p>
            <p>
              <i className="fas fa-envelope-open-text text-warning"></i>&nbsp;
              contactus@gmail.com
            </p>
          </div>
          <div className={style.socialDiv}>
            <ul>
              <li className={style.socialIcons}>
                <div>
                  <i className="fab fa-facebook-f fa-2x text-dark"></i>
                </div>
                <div>
                  <i className="fab fa-instagram-square fa-2x text-dark"></i>
                </div>
                <div>
                  <i className="fab fa-twitter fa-2x text-dark"></i>
                </div>
                <div>
                  <i className="fab fa-linkedin-in fa-2x text-dark"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.bar}></div>
    </section>
  );
};

export default Landing;
