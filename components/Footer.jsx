import Link from "next/link";
import style from "../styles/Footer.module.css";

const cardData = [
  {
    img: "/card-img1.png",
    title: "On Location Service",
    desc:
      "Get your two-wheeler serviced in your preferred time at your home or office with our Best Doorstep bike repair service.",
  },
  {
    img: "/card-img2.png",
    title: "Women Friendly",
    desc:
      "Get your two-wheeler serviced in your preferred time at your home or office with our Best Doorstep bike repair service.",
  },
  {
    img: "/card-img3.png",
    title: "OEM Spares",
    desc:
      "Get your two-wheeler serviced in your preferred time at your home or office with our Best Doorstep bike repair service.",
  },
  {
    img: "/card-img4.png",
    title: "Service Record",
    desc:
      "Get your two-wheeler serviced in your preferred time at your home or office with our Best Doorstep bike repair service.",
  },
  {
    img: "/card-img5.png",
    title: "Multiple Payment",
    desc:
      "Get your two-wheeler serviced in your preferred time at your home or office with our Best Doorstep bike repair service.",
  },
  {
    img: "/card-img6.png",
    title: "Transparent Pricing",
    desc:
      "Get your two-wheeler serviced in your preferred time at your home or office with our Best Doorstep bike repair service.",
  },
];

const Footer = () => {
  return (
    <section className={style.footer} id="footer">
      <div className={style.leftCircle}>
        <img src="/footer-circle-left.png" alt="left circle" />
      </div>
      <div className={style.rightCircle}>
        <img src="/footer-circle-right.png" alt="left circle" />
      </div>
      <div className={style.footerContent}>
        <h1 className={style.why}>
          why <span className={style.bike}>bike</span>
          {""}
          <span className={style.therapist}>Theparist</span> ?
        </h1>
        <div className={style.footerCardContainer}>
          {/* footer-card: start */}
          {cardData.map((val, index) => {
            return (
              <div className={style.footerCard} key={index}>
                <div className={style.footerImg}>
                  <img src={val.img} alt={`card image-${index + 1}`} />
                </div>
                <div className={style.footerCardContent}>
                  <p className={style.cardTitle}>{val.title}</p>
                  <p className={style.cardDesc}>{val.desc}</p>
                </div>
              </div>
            );
          })}
          {/* footer-card:end */}
        </div>
        <div className={style.footerBannerContainer}>
          <div className={style.footerBanner}>
            <div className={style.bannerSmallCircle}>
              <img src="/banner-small-circle.png" alt="small circle" />
            </div>
            <div className={style.bannerBigCircle}>
              <img src="/banner-big-circle.webp" alt="big circle" />
            </div>
            <div className={style.bannerLeft}>
              <h3>let's get started!</h3>
              <p>
                book your first <span>service</span>
              </p>
            </div>
            <div className={style.bannerRight}>
              <Link href="/book-service">
                <button>book here</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.actualFooter}>
        <div className={style.footerLinkContainer}>
          <h3 className={style.c}>c</h3>
          <p>copyright&#169;{new Date().getFullYear()}</p>
        </div>
        <div className={style.footerLinkContainer}>
          <ul>
            <li>customer</li>
            <li>supplier</li>
            <li>buyer</li>
          </ul>
        </div>
        <div className={style.footerLinkContainer}>
          <ul>
            <li>company</li>
            <li>about us</li>
            <li>career</li>
            <li>contact us</li>
          </ul>
        </div>
        <div className={style.footerLinkContainer}>
          <ul>
            <li>further information</li>
            <li>terms & conditions</li>
            <li>privacy and policy</li>
          </ul>
        </div>
        <div className={style.footerLinkContainer}>
          <ul>
            <li>follow us</li>
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
    </section>
  );
};

export default Footer;
