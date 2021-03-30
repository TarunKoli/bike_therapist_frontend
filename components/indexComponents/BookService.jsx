import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { BookingContext, ACTIONS } from "../BookingContext";
import bookStyle from "../../styles/BookService.module.css";
const BookService = () => {
  const [state, dispatch] = useContext(BookingContext);
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
            <select
              name="brandlist"
              id="brand"
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.brand,
                  payload: { brand: e.target.value },
                });
              }}
            >
              <option value="">[--select brand--]</option>
              <option value="brand1">brand1</option>
              <option value="brand2">brand2</option>
              <option value="brand3">brand3</option>
              <option value="brand4">brand4</option>
              <option value="brand5">brand5</option>
              <option value="brand6">brand6</option>
              <option value="brand7">brand7</option>
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
              <option value="variant1">varient1</option>
              <option value="varient2">varient2</option>
              <option value="varient3">varient3</option>
              <option value="varient4">varient4</option>
              <option value="varient5">varient5</option>
              <option value="varient6">varient6</option>
              <option value="varient7">varient7</option>
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
