import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../../styles/AuthStyles/AuthForm.module.css";

const Reset = () => {
  const [isEmailFieldEmpty, setIsEmailFieldEmpty] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

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
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      setError(null);
    } else {
      setConfirmPassword(e.target.value);
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

  const handleReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("password does not match");
    }
    try {
      const res = await axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reset/${router.query.reset}`,
        method: "PATCH",
        data: {
          email,
          password,
        },
        withCredentials: true,
      });
      if (res.status === 201) {
        toast.error(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.msg);
    }
  };

  return (
    <section id="testSignup" className={style.testSignup}>
      <Head>
        <meta title="reset password" content="reset password" />
        <title>Reset Password</title>
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
            <h1 className={style.msgTitle}>hello, friends!</h1>
            <p>enter your personal details and start your journey with us.</p>
          </div>
          <div className={style.colLeftbtnGrp}>
            <Link href="/authentication">
              <button className={style.signUpBtn}>sign in</button>
            </Link>
          </div>
          <h2 className={style.option}>signin using</h2>
          <div className={style.icons}>
            <div>
              <i className="fas fa-envelope fa-2x"></i>
            </div>
          </div>
        </div>
        {/*left col: end*/}
        {/*right col: start*/}
        <div className={style.colRight}>
          <h1 className={style.colRightTitle}>reset password</h1>
          <div className={style.formWrapper}>
            <form
              autoComplete="off"
              className={`${style.rightForm}`}
              onSubmit={handleReset}
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
              <div className={style.formGrp}>
                <input
                  type="password"
                  id="signupPassword"
                  name="password"
                  value={password}
                  onChange={handleInput}
                  required
                />
                <label htmlFor="signupPassword">password</label>
              </div>
              <div className={style.formGrp}>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirm"
                  value={confirmPassword}
                  onChange={handleInput}
                  required
                />
                <label htmlFor="confirmPassword">confirm password</label>
              </div>
              <div className={style.btnGrp}>
                <button type="submit">reset password</button>
              </div>
            </form>
          </div>
        </div>
        {/*right col: end*/}
      </div>
    </section>
  );
};
export default Reset;
