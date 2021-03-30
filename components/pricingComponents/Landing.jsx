import style from "../../styles/pricingStyles/Landing.module.css";

const Landing = () => {
  return (
    <section id="landing" className={style.landing}>
      <div className={style.landingContainer}>
        <div className={style.centerCircle}>
          <div className={style.centerImg}>
            <div className={`${style.left1} ${style.card}`}>
              <i className="fas fa-mobile-alt fa-4x text-warning"></i>
              <h1>
                <span>02</span> Paperless process
              </h1>
            </div>
            <div className={`${style.left2} ${style.card}`}>
              <i className="fas fa-search fa-4x text-warning"></i>
              <h1>
                <span>01</span> on location service
              </h1>
            </div>
            <div className={`${style.left3} ${style.card}`}>
              <i className="fas fa-redo-alt fa-4x text-warning"></i>
              <h1>
                <span>03</span> Cyclic follow- Ups
              </h1>
            </div>
            <img src="/pricing center design.webp" alt="center design" />
            <div className={`${style.right1} ${style.card}`}>
              <i className="fas fa-clipboard-list fa-4x text-warning"></i>
              <h1>
                <span>05</span> 60 Points CheckList
              </h1>
            </div>
            <div className={`${style.right2} ${style.card}`}>
              <i className="fas fa-car fa-4x text-warning"></i>
              <h1>
                <span>04</span> Waterless Body wash
              </h1>
            </div>
            <div className={`${style.right3} ${style.card}`}>
              <i className="fas fa-biking fa-4x text-warning"></i>
              <h1>
                <span>06</span> In House facility
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
