import style from "../../styles/CallUs.module.css";
const CallUs = () => {
  return (
    <section id="call" className={style.call}>
      <div className={style.container}>
        <h1 className={style.title}>
          Not having enough time to get your bike serviced ? Bike Breakdown?
        </h1>
        <p className={style.desc}>
          Whether it's a breakdown or a bike service. Get the best doorstep bike
          repair service in Delhi / Gurgaon.
        </p>
        <br />
        <br />
        <h2 className={style.number}>Call us at - +91-9773666642</h2>
      </div>
      <div className={style.bar}></div>
    </section>
  );
};

export default CallUs;
