import style from "../../styles/aboutStyles/Engine.module.css";

const Engine = () => {
  return (
    <section id="engine" className={style.engine}>
      <div className={style.wrapper}>
        <div className={`container-fluid ${style.engineContainer}`}>
          <div className={`row pt-3 ${style.engineRow}`}>
            <div className={`col-lg-6 text-dark ${style.left}`}>
              <div className={style.leftComma}>
                <img src="/comma-start.png" alt="inverted comma" />
              </div>
              <p>
                It is a one-stop-shop for all two-wheeler users. Our main USP is
                On location bike service. In other words, we offer an On-demand
                bike service at your convenience. Because, we understand the
                mess of getting your bike service done at the authorized service
                centers or at a neighborhood workshop (those long waiting's at
                the service center, overpriced bills, transparency at work and
                most importantly if used genuine products or not). Therefore, to
                cut down all of these and to make bike servicing the most
                convenient and easy-going process. We now bring a GARAGE at your
                doorstep….. aha.. by saying garage we mean - experienced
                mechanic with a set of required tools and genuine spare parts,
                specially trained to work on different locations. Now you can
                stay at your home and spend leisure time with your family,
                meanwhile, we’ll service your bike at your doorstep.
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
                src="/engine.webp"
                alt="engine image"
                className={`img-fluid w-90 img-thumbnail`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.svgDiv}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#333"
            fillOpacity="1"
            d="M0,320L1440,224L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
export default Engine;
