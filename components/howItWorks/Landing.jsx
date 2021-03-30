import "@google/model-viewer/dist/model-viewer";
import style from "../../styles/howItWorks/Landing.module.css";

const Landing = () => {
  return (
    <section id="landing" className={style.landing}>
      <div className={style.landingContainer}>
        <model-viewer
          src="/scene.glb"
          ios-src=""
          poster=""
          alt="A 3D model of an astronaut"
          shadow-intensity="5"
          // skybox-image="/urban_courtyard_02_2k.hdr"
          auto-rotate
          ar
        ></model-viewer>

        <div className={style.info}>
          <div className={style.head1}>
            <h1>Book A Service</h1>
          </div>
          <div className={style.feature1}>
            <div className={style.type1}>
              <img src="/list2.svg" alt="list image" />
              <div>
                <h1>1) Choose Your Two Wheeler</h1>
                <p>Select your two-wheeler brand and model.</p>
              </div>
            </div>
            <div className={style.type1}>
              <div>
                <h1>2) Choose your time slot</h1>
                <p>We service from 9 am-9 pm.</p>
              </div>
              <img src="/list1.svg" alt="list image" />
            </div>
            <div className={style.type1}>
              <img src="/list2.svg" alt="list image" />
              <div>
                <h1>3) Fill in your contact details.</h1>
                <p>
                  Your Name, Number, email and address is required. You can put
                  repair notes as well.
                </p>
              </div>
            </div>
            <div className={style.type1}>
              <div>
                <h1>4) Finished.</h1>
                <p>
                  A booking request has been placed and our executive will
                  contact you in the next 30 minutes.
                </p>
              </div>
              <img src="/list1.svg" alt="list image" />
            </div>
          </div>

          <div className={style.head1}>
            <h1>Bike Therepist Service Guide</h1>
          </div>
          <div className={style.feature1}>
            <div className={style.type1}>
              <img src="/list2.svg" alt="list image" />
              <div>
                <h1>1) Book a service.</h1>
                <p>
                  You can book a service by filling the form mentioned ( link )
                  or can call us at (no.)
                </p>
              </div>
            </div>
            <div className={style.type1}>
              <div>
                <h1>2) Our support team.</h1>
                <p>
                  Our executive will reach back to you for a better
                  understanding of your two-wheeler’s condition and for the
                  final confirmation.
                </p>
              </div>
              <img src="/list1.svg" alt="list image" />
            </div>
            <div className={style.type1}>
              <img src="/list2.svg" alt="list image" />
              <div>
                <h1>3)Job Card will be created.</h1>
                <p>
                  In the first 20 minutes a Job card with estimated cost will be
                  created and shared with you.
                </p>
              </div>
            </div>
            <div className={style.type1}>
              <div>
                <h1>4) Hassle-free service.</h1>
                <p>
                  A service or repair work will be performed by the certified
                  mechanics following manufacturers suggested procedures
                </p>
              </div>
              <img src="/list1.svg" alt="list image" />
            </div>
            <div className={style.type1}>
              <img src="/list2.svg" alt="list image" />
              <div>
                <h1>5) Confirmation of work.</h1>
                <p>
                  To clear any doubts with the service provided a confirmation
                  call is initiated by our bike expert to our HO.
                </p>
              </div>
            </div>
            <div className={style.type1}>
              <div>
                <h1>6) Multiple payment option</h1>
                <p>
                  PAY NOW! Using your PayTM, IMPS, Cash. Your GST invoice is
                  then delivered via email.
                </p>
              </div>
              <img src="/list1.svg" alt="list image" />
            </div>
          </div>

          {/* <div className={style.head2}></div>
          <div className={style.feature2}></div> */}
          <div className={style.head3}></div>
          <div className={style.feature3}></div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
