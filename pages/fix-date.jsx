import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ACTIONS, BookingContext } from "../components/BookingContext";
import bookStyle from "../styles/BookService.module.css";
import styles from "../styles/bookService/FixDate.module.css";

const FixDate = () => {
  const [state, dispatch] = useContext(BookingContext);
  const router = useRouter();

  const handleNext = () => {
    if (state.bookingDate && state.bookingTime) {
      router.push("/user-details");
    } else {
      alert("please fill the required field");
    }
  };

  return (
    <div className={styles.fixdate}>
      <div className={bookStyle.container} className={styles.status}>
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
        <div className={styles.infoContainer}>
          <p className={styles.info}>
            Below you can find a list of available time slots for your{" "}
            {state.variant} service.
            <br />
            Click on a time slot to proceed with booking.
          </p>
        </div>
      </div>

      <div className={styles.calContainer}>
        <div className={styles.calender}>
          <div className={styles.inputGroup}>
            <label htmlFor="date">date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={state.bookingDate}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.bookingDate,
                  payload: { bookingDate: e.target.value },
                });
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="time">time</label>
            <input
              type="time"
              name="time"
              id="time"
              value={state.bookingTime}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.bookingTime,
                  payload: { bookingTime: e.target.value },
                });
              }}
            />
          </div>
        </div>
        <div className={styles.logo}>
          <h1>
            <span className={styles.textLogo}>Bike</span>
            <br />
            <strong>Therapist</strong>
          </h1>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <hr />
        </div>
        <div className={styles.buttonGroup}>
          <Link href="/book-service">
            <button>&larr; Back</button>
          </Link>
          <button onClick={handleNext}>Next &rarr;</button>
        </div>
      </div>
      <div className={styles.end}></div>
    </div>
  );
};

export default FixDate;
