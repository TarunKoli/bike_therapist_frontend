import Link from "next/link";
import style from "../../styles/AboutBike.module.css";

const AboutBike = () => {
  return (
    <section className={style.aboutBike} id="aboutBike">
      <div className={style.container}>
        <h1 className={`${style.primaryHeading} ${style.showMd}`}>
          about <span className={style.bike}>bike</span>{" "}
          <span className={style.textDanger}>therapist</span>
        </h1>
        <div className={style.containerContent}>
          <div className={style.actualContent}>
            <h1 className={`${style.primaryHeading} ${style.hideLg}`}>
              about <span className={style.bike}>bike</span>
              <span className={style.textDanger}>Therapist</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              eaque quod praesentium iusto suscipit pariatur inventore
              consectetur ea deserunt aut quae adipisci veniam doloremque
              laborum illo aspernatur! Impedit, molestias enim.
            </p>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              commodi obcaecati dicta. Quo, voluptas eligendi voluptatem illo
              maxime repellat consequuntur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tenetur commodi obcaecati dicta.
              Quo, voluptas eligendi voluptatem illo maxime repellat
              consequuntur.
            </p>
          </div>
          <div className={style.imgContainer}>
            <img src="/bike.webp" alt="bike image" />
          </div>
        </div>
        <div className={style.btnGrp}>
          <Link href="/about">
            <button>know more</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutBike;
