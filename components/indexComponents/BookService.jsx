import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { BookingContext, ACTIONS } from "../BookingContext";
import bookStyle from "../../styles/BookService.module.css";
import Data from "./Brands.json";

const BookService = () => {
  const [state, dispatch] = useContext(BookingContext);
  const [varient, setVarient] = useState([]);
  const router = useRouter();
  const handleNext = () => {
    if (
      state.brand !== "[--select brand--]" &&
      state.variant !== "[--select brand--]" &&
      state.brand &&
      state.variant
    ) {
      router.push("/fix-date");
    } else {
      alert("please fill the required field !!!");
    }
  };

  const handleBrand = (e) => {
    dispatch({
      type: ACTIONS.brand,
      payload: { brand: e.target.value },
    });
    console.log(e.target.value);
    if (e.target.value === "HERO") setVarient(Data[0].Hero);
    else if (e.target.value === "HONDA") setVarient(Data[0].Honda);
    else if (e.target.value === "BAJAJ") setVarient(Data[0].Bajaj);
    else if (e.target.value === "TVS") setVarient(Data[0].Tvs);
    else if (e.target.value === "YAMAHA") setVarient(Data[0].Yamaha);
    else if (e.target.value === "ROYAL ENFIELD")
      setVarient(Data[0].RoyalEnfield);
    else if (e.target.value === "KTM") setVarient(Data[0].Ktm);
    else if (e.target.value === "VESPA") setVarient(Data[0].Vespa);
    else if (e.target.value === "APRILIA") setVarient(Data[0].Aprilia);
    else if (e.target.value === "SUZUKI") setVarient(Data[0].Suzuki);
    else if (e.target.value === "HERO HONDA") setVarient(Data[0].HeroHonda);
    else setVarient([]);
  };

  return (
    <section className={bookStyle.book} id="book">
      <div className={bookStyle.container}>
        <h1 className={bookStyle.primaryHeading}>
          you can book a <span className={bookStyle.serviceFont}>service </span>
          here
        </h1>
        <div className={bookStyle.progressSection}>
          <div className={bookStyle.progressContainer}>
            <label htmlFor="brand">1. brand</label>
            <div className={bookStyle.progressBarWrapper}>
              <p></p>
            </div>
          </div>
          <div className={bookStyle.progressContainer}>
            <label htmlFor="time">2. preferrable time</label>
            <div className={bookStyle.progressBarWrapper}>
              <p></p>
            </div>
          </div>
          <div className={bookStyle.progressContainer}>
            <label htmlFor="details">3. details</label>
            <div className={bookStyle.progressBarWrapper}>
              <p></p>
            </div>
          </div>
          <div className={bookStyle.progressContainer}>
            <label htmlFor="done">4. done</label>
            <div className={bookStyle.progressBarWrapper}>
              <p></p>
            </div>
          </div>
        </div>
        <h1 className={bookStyle.secondayHeading}>
          your <span className={bookStyle.textWarning}>two-wheeler</span>{" "}
          details
        </h1>
        <div className={bookStyle.detailsSection}>
          <div className={bookStyle.detailsContainer}>
            <label htmlFor="vehicle">velhicle brand</label>
            <select name="brandlist" id="brand" onChange={handleBrand}>
              <option value="">[--select brand--]</option>
              {Data[0].Brands.map((brand, index) => {
                return (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={bookStyle.detailsContainer}>
            <label htmlFor="varient">varient</label>
            <select
              name="varientlist"
              id="varient"
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.variant,
                  payload: { variant: e.target.value },
                });
              }}
            >
              <option value="">[--select varient--]</option>
              {varient.map((varient, index) => {
                return (
                  <option key={index} value={varient}>
                    {varient}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <hr />
        <div className={bookStyle.nextBtn}>
          <button onClick={handleNext}>next &rarr;</button>
        </div>
      </div>
    </section>
  );
};
export default BookService;
