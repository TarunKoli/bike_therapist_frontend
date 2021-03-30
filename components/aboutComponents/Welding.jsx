import style from "../../styles/aboutStyles/Welding.module.css";

const Welding = () => {
  return (
    <section id="engine" className={style.engine}>
      <div className={style.wrapper}>
        <div className={`container-fluid ${style.engineContainer}`}>
          <div className={`row pt-3 ${style.engineRow}`}>
            <div className={`col-lg-6 text-dark ${style.left}`}>
              <div className={style.leftComma}>
                <img src="/comma-start.png" alt="inverted comma" />
              </div>
              <p className={style.title}>We Care For Your Ride</p>

              <p>
                In addition, offers Pick & Drop service and repair works at our
                service center. We have our own inventory of the Genuine/OEM
                spare parts which helps in making the whole process easier and
                time-saving with work transparency.
              </p>

              <div className={style.rightComma}>
                <img src="/comma-end.png" alt="inverted comma" />
              </div>
            </div>
            <div
              className={`col-lg-6 d-flex justify-content-center align-items-center order-first order-sm-1
            ${style.right}`}
            >
              <img
                src="/welding.webp"
                alt="engine image"
                className={`img-fluid w-75`}
              />
            </div>
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
export default Welding;
