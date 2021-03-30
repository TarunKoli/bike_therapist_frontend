import style from "../../styles/OurClient.module.css";
const CarouselItems = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className={`carousel slide ${style.carouselDiv}`}
      data-bs-ride="carousel"
    >
      <div className={style.invertedCommaStart}>
        <img src="/comma-start.png" alt="inverted comma start" />
      </div>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div>
            <p className={style.carouselTitle}>
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <hr className={style.titleUnderline} />
            <p className={style.carouselContent}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div>
            <p className={style.carouselTitle}>
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <hr className={style.titleUnderline} />
            <p className={style.carouselContent}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div>
            <p className={style.carouselTitle}>
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <hr className={style.titleUnderline} />
            <p className={style.carouselContent}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
            </p>
          </div>
        </div>
      </div>
      <div className={style.invertedCommaEnd}>
        <img src="/comma-end.png" alt="inverted comma end" />
      </div>
      <button
        className="carousel-control-prev car-btn"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        &#8668;
      </button>
      <button
        className="carousel-control-next car-btn"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        &#8669;
      </button>
      <style jsx>{`
        .carousel-item {
          height: 30rem;
          overflow: auto;
        }
        .car-btn {
          position: absolute !important;
          color: var(--text-warning);
          font-size: 4rem;
          box-shadow: -1rem 1rem 1rem #000;
          height: 4rem;
          width: 4rem;
        }
        .carousel-control-prev {
          left: -10%;
        }
        .carousel-control-next {
          right: -10%;
        }
        .carousel-indicators {
          position: absolute;
          bottom: -18%;
        }
        .carousel-indicators button {
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 50%;
        }
        @media (max-width: 768px) {
          .carousel-control-prev {
            left: -7rem;
            top: 50%;
            transform: translateY(-50%);
            width: 5rem;
          }
          .carousel-control-next {
            right: -7rem;
            top: 50%;
            transform: translateY(-50%);
            width: 5rem;
          }
        }
        @media (max-width: 600px) {
          .carousel.slide {
            margin-top: 15%;
          }
          .carousel-control-prev {
            left: -7rem;
            top: 50%;
            transform: translateY(-50%);
            width: 5rem;
          }
          .carousel-control-next {
            right: -7rem;
            top: 50%;
            transform: translateY(-50%);
            width: 5rem;
          }
          .invertedCommaStart,
          .invertedCommaEnd {
            height: 4rem;
            width: 4rem;
          }
          .carousel-indicators {
            bottom: -10%;
          }
        }
        @media (max-width: 450px) {
          .carousel-indicators {
            bottom: -15%;
          }
        }
        @media (max-width: 350px) {
          .carousel-indicators {
            bottom: -15%;
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselItems;
