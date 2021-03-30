import style from "../../styles/serviceStyle/Bike.module.css";
const leftData = [
  {
    title: "ENGINE FLUID",
    desc: "Change the oil,oil filters and coolent fluid",
  },
  {
    title: "BRAKES",
    desc: "Check brake fluid levels and brake pad wears",
  },
  {
    title: "CLUTCH",
    desc: "Clutch Adjustment",
  },
  {
    title: "FRONT+REAR WHEEL",
    desc: "Air pressure levellled, Wheel rotation and crush rubbers",
  },
  {
    title: "DRIVE TRAIN",
    desc:
      "Look over the sprockets and chain for any wear.Clean the chain and lubricate it",
  },
];
const rightData = [
  {
    title: "FUEL SYSTEM",
    desc: "Drain and replace old fuel if it is still from so long",
  },
  {
    title: "BATTERY",
    desc: "Battery terminals to be cleaned and connection to be tighhtened",
  },
  {
    title: "SUSPENSION",
    desc: "Suspension Adjustment",
  },
  {
    title: "LIGHTS,CABLE",
    desc:
      "Test all lights | Confirm throttle, brake and clutch cable operate Smoothly",
  },
  {
    title: "AIR-FILTER",
    desc:
      "Look over the sprockets and chain for any wear.Clean the chain and lubricate it",
  },
];
const Bike = () => {
  return (
    <section className={style.bike} id="bike">
      <div className={style.bikeContainer}>
        <h1 className={style.title}>
          <span className={style.t0}> bike</span>
          <span className={style.t1}> therapist </span>
          service checklist
        </h1>
        <div className={style.bikeParts}>
          <div className={style.left}>
            {leftData.map((val, index) => {
              return (
                <div className={style.leftContent} key={index}>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              );
            })}
          </div>
          <div className={style.center}>
            <img src="/center-bike.webp" alt="bike image" />
          </div>
          <div className={style.right}>
            {rightData.map((val, index) => {
              return (
                <div className={style.rightContent} key={index}>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bike;
