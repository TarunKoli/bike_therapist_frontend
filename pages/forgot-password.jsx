import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../styles/AuthStyles/AuthForm.module.css";

const Forgot = () => {
  const [isEmailFieldEmpty, setIsEmailFieldEmpty] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
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

  useEffect(() => {
    handleEmail();
  }, [email]);

  const handleInput = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      setError(null);
    }
  };
  const handleEmail = () => {
    if (email) {
      setIsEmailFieldEmpty(false);
    } else {
      setIsEmailFieldEmpty(true);
    }
  };
  const handleForgot = async (e) => {
    e.preventDefault();
    setSpin((prev) => !prev);
    try {
      const res = await axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/forgot`,
        method: "POST",
        data: {
          email: email,
        },
        withCredentials: true,
        onDownloadProgress: (progressEvent) => {
          setProgress(
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
          );
        },
      });
      if (res.status === 200) {
        setSpin((prev) => !prev);
        toast.success(res.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      setSpin((prev) => !prev);
      setError(err.response.data.msg);
    }
  };

  return (
    <section id="testSignup" className={style.testSignup}>
      <Head>
        <meta
          title="forgot password"
          content="fill up the form to get reset link to your email if you forgot your password"
        />
        <title>Forgot Password</title>
      </Head>
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

      <div className={style.testSignupContainer}>
        {/*left col: start*/}
        <div className={style.colLeft}>
          <h2 className={style.title}>
            <span>bike</span> therapist
          </h2>
          <div className={style.message}>
            <h1 className={style.msgTitle}>Already have an account</h1>
            <p>click below to signin</p>
          </div>
          <div className={style.colLeftbtnGrp}>
            <Link href="/authentication">
              <button className={style.signUpBtn}>sign in</button>
            </Link>
          </div>
          <h2 className={style.option}>signin</h2>
          <div className={style.icons}>
            <div>
              <i className="fas fa-envelope fa-2x"></i>
            </div>
          </div>
        </div>
        {/*left col: end*/}
        {/*right col: start*/}
        <div className={style.colRight}>
          <h1 className={style.colRightTitle}>forgot password</h1>
          <div className={style.formWrapper}>
            <form
              autoComplete="off"
              className={`${style.rightForm}`}
              onSubmit={handleForgot}
            >
              <div className={style.formGrp}>
                <input
                  type="email"
                  id="signupEmail"
                  name="email"
                  value={email}
                  onChange={handleInput}
                  required
                />
                <label
                  htmlFor="signupEmail"
                  className={isEmailFieldEmpty ? null : style.labelUp}
                >
                  email
                </label>
              </div>
              <div className="progress mt-2 mb-4">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className={style.btnGrp}>
                <button className={spin ? `${style.hide}` : ``} type="submit">
                  get email
                </button>
                <button
                  type="button"
                  className={spin ? `${style.spinner}` : `${style.hide}`}
                  disabled
                >
                  <span
                    className={`spinner-border spinner-border-sm ${style.spin}`}
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Processing...
                </button>
              </div>
            </form>
          </div>
        </div>
        {/*right col: end*/}
      </div>
    </section>
  );
};
export default Forgot;
