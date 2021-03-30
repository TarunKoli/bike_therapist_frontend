import CarouselItems from "./CarouselItems";
import style from "../../styles/OurClient.module.css";

const OurClient = () => {
  return (
    <section id="client" className={style.client}>
      <div className={style.containerDiv}>
        <h1 className={style.title}>
          <span>our</span> client said
        </h1>
        <div className={style.underline}></div>
        <CarouselItems />
      </div>
      <div className={style.bar}></div>
    </section>
  );
};
export default OurClient;
