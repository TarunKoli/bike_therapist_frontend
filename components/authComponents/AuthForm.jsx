import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../../styles/AuthStyles/AuthForm.module.css";

const AuthForm = () => {
  const [isEmailFieldEmpty, setIsEmailFieldEmpty] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [spin, setSpin] = useState(false);
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
    } else {
      setPassword(e.target.value);
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
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("password does not match !!!");
    }
    try {
      const res = await axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/signup`,
        data: {
          name,
          email,
          phone,
          password,
        },
        method: "POST",
        withCredentials: true,
      });
      if (res.status === 201) {
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError(null);
        setIsSignin(false);
        toast.success("account created", {
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
      setError(err.response.data.msg);
    }
  };
  const handleSignin = async (e) => {
    e.preventDefault();
    setSpin((prev) => !prev);
    try {
      const res = await axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/signin`,
        method: "POST",
        data: {
          email,
          password,
        },
        withCredentials: true,
      });
      if (res.status === 200) {
        window.localStorage.setItem("userId", res.data.userId);
        setEmail("");
        setPassword("");
        setError(null);
        setSpin((prev) => !prev);
        toast.success("login successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.replace("/admin-dashboard");
      }
    } catch (err) {
      setSpin((prev) => !prev);
      setError(err.response.data.msg);
    }
  };

  return (
    <section id="testSignup" className={style.testSignup}>
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
            <h1 className={style.msgTitle}>welcome, back!</h1>
            <p>To Keep Connected With Please Login With Your Personal Info.</p>
          </div>
          <div className={style.colLeftbtnGrp}>
            <Link href="/forgot-password">
              <button className={style.signUpBtn}>Forgot PassWord ?</button>
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
          <h1 className={style.colRightTitle}>sign in</h1>
          <div className={style.formWrapper}>
            <form
              autoComplete="off"
              className={`${style.rightForm} ${style.show}`}
              onSubmit={handleSignin}
            >
              <div className={style.formGrp}>
                <input
                  type="email"
                  id="signinEmail"
                  name="email"
                  value={email}
                  onChange={handleInput}
                  required
                />
                <label
                  htmlFor="signinEmail"
                  className={isEmailFieldEmpty ? null : style.labelUp}
                >
                  email
                </label>
              </div>
              <div className={style.formGrp}>
                <input
                  type="password"
                  id="signinPassword  "
                  name="password"
                  value={password}
                  onChange={handleInput}
                  required
                />
                <label htmlFor="signinPassword">password</label>
              </div>
              <div className={style.btnGrp}>
                <button className={spin ? `${style.hide}` : ``} type="submit">
                  sign in
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
                  Signing in...
                </button>
              </div>
              <p className={style.forgotPassword}>
                <span className="text-warning">forgot password ?</span>{" "}
                <span className="text-danger">
                  click{" "}
                  <Link href="/forgot-password" className={style.link}>
                    <a>here</a>
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
        {/*right col: end*/}
      </div>
    </section>
  );
};
export default AuthForm;
