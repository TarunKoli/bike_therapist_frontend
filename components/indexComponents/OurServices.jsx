import style from "../../styles/OurServices.module.css";

const serviceData = [
  {
    id: Math.random(),
    icon: "/service_icon1.svg",
    content: "On Location Service",
    footer: "RESEARCH",
  },
  {
    id: Math.random(),
    icon: "/service_icon2.svg",
    content: "On Location Service",
    footer: "idea",
  },
  {
    id: Math.random(),
    icon: "/service_icon3.svg",
    content: "On Location Service",
    footer: "process",
  },
  {
    id: Math.random(),
    icon: "/service_icon4.svg",
    content: "On Location Service",
    footer: "goals",
  },
];

const OurServices = () => {
  return (
    <section className={style.ourServices} id="ourServices">
      <div className={style.container}>
        <h1 className={style.headingPrimary}>
          <span className={style.bgWarning}>our</span> services
        </h1>
        <div className={style.serviceSection}>
          {serviceData.map((val, index) => {
            return (
              <div className={style.serviceContainer} key={val.id}>
                <div className={style.iconImg}>
                  <img src={val.icon} alt="service icont 1" />
                </div>
                <p className={style.serviceCount}>0{index + 1}</p>
                <p className={style.serviceContent}>{val.content}</p>
                <hr />
                <p className={style.serviceFooter}>{val.footer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
