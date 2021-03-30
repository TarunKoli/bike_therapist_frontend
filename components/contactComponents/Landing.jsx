import style from "../../styles/contactStyles/Landing.module.css";

const Landing = () => {
  return (
    <section id="contactLanding" className={style.contactLanding}>
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
                <input type="text" name="name" id="name" />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="email">your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="message">your message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="20"
                  rows="5"
                ></textarea>
              </div>
            </form>
          </div>
          <div className={style.leftBtnGrp}>
            <button>
              <span>send</span> message
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
