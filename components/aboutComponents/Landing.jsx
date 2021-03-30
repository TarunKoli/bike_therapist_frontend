import style from "../../styles/aboutStyles/Landing.module.css";
const Landing = () => {
  return (
    <section id="landing" className={style.landing}>
      <div className={style.headingDiv}>
        <h1 className={style.title}>
          welcome to <span className={style.bike}>bike </span>
          <span className={style.therapist}>therapist</span>
        </h1>
        <div className={style.desc}>
          <div className={style.leftComma}>
            <img src="/comma-start.png" alt="inverted comma" />
          </div>
          <p>
            Mechanic at your doorstep conceptualized to make bike servicing a
            hassle-free experience for two-wheeler users.
          </p>
          <div className={style.rightComma}>
            <img src="/comma-end.png" alt="inverted comma" />
          </div>
        </div>
      </div>
      <div className={style.svgDiv}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fdd600"
            fillOpacity="1"
            d="M0,320L1440,224L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
export default Landing;
