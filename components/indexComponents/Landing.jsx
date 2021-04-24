import Link from "next/link";
import style from "../../styles/Landing.module.css";
import PwaButton from "./PwaButton";

const Landing = () => {
  return (
    <section className={style.landing} id="landing">
      <h1 className={style.headingPrimary}>
        <span className={style.mechanic}>mechanic</span> at your <br />{" "}
        <span className={style.door}>doorstep</span>
      </h1>
      <h3 className={style.headingSecondary}>At Delhi & gurgaon</h3>
      <div className={style.button}>
        <Link href="/book-service">
          <button>Book A Service &rarr;</button>
        </Link>
        <PwaButton />
      </div>
    </section>
  );
};

export default Landing;
