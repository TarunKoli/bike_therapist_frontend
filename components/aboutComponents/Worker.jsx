import style from "../../styles/aboutStyles/Worker.module.css";

const Worker = () => {
  return (
    <section id="engine" className={style.engine}>
      <div className={style.wrapper}>
        <div className={`container-fluid ${style.engineContainer}`}>
          <div className={`row pt-3 ${style.engineRow}`}>
            <div
              className={`col-lg-6 d-flex order-sm-1 justify-content-center align-items-center 
            ${style.right}`}
            >
              <img
                src="/mechanic.webp"
                alt="engine image"
                className={`img-fluid w-80 img-thumbnail`}
              />
            </div>
            <div
              className={`col-lg-6 text-dark order-first order-sm-2 ${style.left}`}
            >
              <div className={style.leftComma}>
                <img src="/comma-start.png" alt="inverted comma" />
              </div>
              <p>
                With Mechido, you can book a bike service online as per your
                preferred date, time and location. Once the booking is made,
                you’ll get a callback in a maximum of 30 minutes to understand
                more about your two-wheeler’s condition. The mechanic will
                report to your location on the provided ETA. In the maximum two
                hours, your two-wheeler will be serviced and handed over to you.
                A test ride by the user is mandatory if you need any further
                adjustments. Now, is the time to pay the very reasonable bill
                which will be shared with you after work completion.
              </p>

              <p>We also fulfill bike accessory needs. Multi-payment option</p>

              <p>
                We offer various payment modes such as Payment wallet/ UPI
                transfers/ Bank account transfer/ Payment with cash.
              </p>
              <div className={style.rightComma}>
                <img src="/comma-end.png" alt="inverted comma" />
              </div>
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
export default Worker;
