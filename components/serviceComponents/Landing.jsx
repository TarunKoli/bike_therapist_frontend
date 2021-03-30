import style from "../../styles/serviceStyle/Landing.module.css";

const cardData = [
  {
    title: "Doorstep bike service",
    content:
      "To make bike servicing a trouble-free experience, we facilitate On location bike service. However, best doorstep bike repair service we are offering with skilled mechanics who provide consistent quality of work",
  },
  {
    title: "Pick & Drop Services",
    content:
      "To make bike servicing a trouble-free experience, we facilitate On location bike service. However, best doorstep bike repair service we are offering with skilled mechanics who provide consistent quality of work",
  },
  {
    title: "Repair At Our Garage",
    content:
      "To make bike servicing a trouble-free experience, we facilitate On location bike service. However, best doorstep bike repair service we are offering with skilled mechanics who provide consistent quality of work",
  },
  {
    title: "Bike Accessories",
    content:
      "To make bike servicing a trouble-free experience, we facilitate On location bike service. However, best doorstep bike repair service we are offering with skilled mechanics who provide consistent quality of work",
  },
];

const Landing = () => {
  return (
    <section id="landing" className={style.landing}>
      <div className={style.landingContainer}>
        <h1 className={style.title}>
          our <span>services</span>
        </h1>
        <div className={style.cardContainer}>
          {cardData.map((value, index) => {
            return (
              <div className={style.card} key={index}>
                <h2>0{index + 1}</h2>
                <h3 className={style.cardTitle}>{value.title}</h3>
                <div className={style.content}>{value.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Landing;
