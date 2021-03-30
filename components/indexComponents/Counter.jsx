import style from "../../styles/Counter.module.css";

const Counter = () => {
  return (
    <section id="counter" className={style.counter}>
      <div className={style.containerDiv}>
        <h1 className={style.primaryHeading}>
          Excellence in Automotive Services Since 2001
        </h1>
        <div className={style.counterDiv}>
          <div className={style.count}>
            <p className={style.actualCount}>10</p>
            <p className={style.countDesc}>year of experience</p>
          </div>
          <div className={style.count}>
            <p className={style.actualCount}>167</p>
            <p className={style.countDesc}>Two-wheeler serviced at Doorstep</p>
          </div>
          <div className={style.count}>
            <p className={style.actualCount}>80</p>
            <p className={style.countDesc}>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Counter;
