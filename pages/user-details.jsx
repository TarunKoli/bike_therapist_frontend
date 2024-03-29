import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { BookingContext, ACTIONS } from "../components/BookingContext";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../styles/AuthStyles/AuthForm.module.css";
import styles from "../styles/bookService/UserDetails.module.css";
import bookStyle from "../styles/BookService.module.css";

export let socket;

const UserDetails = () => {
  const [state, dispatch] = useContext(BookingContext);
  const [error, setError] = useState(null);
  const conditions =
    "https://firebasestorage.googleapis.com/v0/b/bike-therapist.appspot.com/o/BIKE%20THERAPIST%20TERMS%20AND%20CONDITION.pdf?alt=media&token=92c10b31-0520-49c9-a29e-3da4cbc66d6d";
  const policy =
    "https://firebasestorage.googleapis.com/v0/b/bike-therapist.appspot.com/o/CANCELLATION%20POLICY.pdf?alt=media&token=ee2b9a72-670a-4ad1-ad86-89a9994e01cf";
  const router = useRouter();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);

  const displayRazorPay = async () => {
    const res = await handleNext(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      window.alert("payment gateway failed to start !!!");
      return;
    }

    const resOptions = await axios({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment`,
      method: "GET",
    });

    if (!resOptions) {
      window.alert("payment gateway failed to start !!!");
      return;
    }
    if (resOptions.status === 200) {
      const options = {
        key: process.env.NEXT_PUBLIC_PAYMENT_KEY,
        amount: resOptions.data.amount,
        currency: resOptions.data.currency,
        name: "BikeTherapist",
        description: "Test Transaction",
        image: "http://localhost:3000/android-chrome-192x192.png",
        order_id: resOptions.data.id,
        prefill: {
          email: state.email,
          contact: state.phone,
        },
        notes: {
          address: "Razorpay Corporate Office",
          name: state.name,
          bookingDate: moment(state.bookingDate).toISOString(),
        },
        theme: {
          color: "#fdd600",
        },
        handler: async function (response) {
          try {
            const saveUserData = await axios({
              url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/booking`,
              method: "POST",
              data: {
                brand: state.brand,
                variant: state.variant,
                bookingDate: moment(state.bookingDate).toISOString(),
                bookingTime: state.bookingTime,
                name: state.name,
                email: state.email,
                phone: state.phone,
                houseNumber: state.houseNumber,
                streetNumber: state.streetNumber,
                city: state.city,
                state: state.state,
                postalCode: state.postalCode,
                dob: moment(state.dob).toISOString(),
                note: state.note,
              },
            });
            if (saveUserData.status === 201) {
              window.alert("booking successfull");
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature);
              //sending socket events to backend
              socket = io(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
              socket.emit("newBooking", { msg: "new booking" });

              axios({
                url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/paymentId`,
                method: "PATCH",
                data: {
                  id: response.razorpay_payment_id,
                  email: state.email,
                },
              }).catch((err) => {
                console.log(err);
              });
              //send req to the backend for the invoice and download it
              axios({
                url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/generate-invoice`,
                method: "POST",
                data: {
                  name: state.name,
                  amount: 100,
                  receiptId: response.razorpay_payment_id,
                },
                withCredentials: true,
                responseType: "arraybuffer",
              })
                .then((res) => {
                  const blob = new Blob([res.data]);
                  const url = window.URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.setAttribute(
                    "download",
                    "invoice" + new Date().getTime() + ".pdf"
                  );
                  link.click();
                  router.replace("/");
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          } catch (err) {
            setError(err.response.data.msg);
          }
        },
      };
      const razorpayObj = new window.Razorpay(options);
      razorpayObj.open();
    }
  };

  const handleNext = async (src) => {
    if (
      state.brand &&
      state.variant &&
      state.bookingDate &&
      state.bookingTime &&
      state.name &&
      state.email &&
      state.phone &&
      state.houseNumber &&
      state.streetNumber &&
      state.city &&
      state.state &&
      state.postalCode &&
      state.dob &&
      document.getElementById("tc").checked
    ) {
      try {
        const validationData = await axios({
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/validate-booking`,
          method: "POST",
          data: {
            brand: state.brand,
            variant: state.variant,
            bookingDate: moment(state.bookingDate).toISOString(),
            bookingTime: state.bookingTime,
            name: state.name,
            email: state.email,
            phone: state.phone,
            houseNumber: state.houseNumber,
            streetNumber: state.streetNumber,
            city: state.city,
            state: state.state,
            postalCode: state.postalCode,
            dob: moment(state.dob).toISOString(),
            note: state.note,
          },
        });
        if (validationData.status === 200) {
          return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
              return resolve(true);
            };
            script.onerror = () => {
              return resolve(false);
            };
            document.body.appendChild(script);
          });
        }
      } catch (err) {
        setError(err.response.data.msg);
      }
    } else {
      if (!document.getElementById("tc").checked)
        window.alert("Please accept terms and conditions");
      else window.alert("please fill the required field");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={style.myToast}
      />
      <div className={styles.userDetails}>
        <div className={bookStyle.container} className={styles.status}>
          <div
            className={`${bookStyle.progressSection} ${styles.progressSection}`}
          >
            <div
              className={`${bookStyle.progressContainer} ${styles.progressContainer}`}
            >
              <label htmlFor="brand">1. brand</label>
              <div
                className={`${bookStyle.progressBarWrapper} ${styles.progressBarWrapper}`}
              >
                <p></p>
              </div>
            </div>
            <div
              className={`${bookStyle.progressContainer} ${styles.progressContainer}`}
            >
              <label htmlFor="time">2. preferrable time</label>
              <div
                className={`${bookStyle.progressBarWrapper} ${styles.progressBarWrapper}`}
              >
                <p></p>
              </div>
            </div>
            <div
              className={`${bookStyle.progressContainer} ${styles.progressContainer}`}
            >
              <label htmlFor="details">3. details</label>
              <div
                className={`${bookStyle.progressBarWrapper} ${styles.progressBarWrapper}`}
              >
                <p></p>
              </div>
            </div>
            <div
              className={`${bookStyle.progressContainer} ${styles.progressContainer}`}
            >
              <label htmlFor="done">4. done</label>
              <div
                className={`${bookStyle.progressBarWrapper} ${styles.progressBarWrapper}`}
              >
                <p></p>
              </div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.info}>
              You selected a service booking for {state.variant} at{" "}
              {state.bookingTime} pm on{" "}
              {moment(state.bookingDate).format("MMMM Do YYYY")}. Please provide
              your details in the form below to proceed with the booking.
            </p>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputs1}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={(e) => {
                  dispatch({
                    type: ACTIONS.name,
                    payload: { name: e.target.value },
                  });
                }}
                required
              />
            </div>
            <div className={styles.inputs1}>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={state.phone}
                onChange={(e) => {
                  dispatch({
                    type: ACTIONS.phone,
                    payload: { phone: e.target.value },
                  });
                }}
                required
              />
            </div>
            <div className={styles.inputs1}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={(e) => {
                  dispatch({
                    type: ACTIONS.email,
                    payload: { email: e.target.value },
                  });
                }}
                required
              />
            </div>
          </div>
          <h1>Address</h1>
          <div className={styles.inputs2}>
            <label>HouseNumber / StreetNumber</label>
            <input
              type="text"
              name="houseNumber"
              value={state.houseNumber}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.houseNumber,
                  payload: { houseNumber: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs2}>
            <label>Street Address</label>
            <input
              type="text"
              name="address"
              value={state.streetNumber}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.streetNumber,
                  payload: { streetNumber: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs2}>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={state.city}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.city,
                  payload: { city: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs2}>
            <label>State</label>
            <input
              type="text"
              name="state"
              value={state.state}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.state,
                  payload: { state: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs2}>
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.postalCode,
                  payload: { postalCode: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs1}>
            <label>Date Of Birth</label>
            <input
              type="date"
              name="date"
              id="date"
              value={state.dob}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.dob,
                  payload: { dob: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs3}>
            <label>Special Notes(if any)</label>
            <textarea
              name="note"
              id="note"
              cols="30"
              rows="5"
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.note,
                  payload: { note: e.target.value },
                });
              }}
              required
            ></textarea>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" name="t&c" id="tc" required />
            <label>
              I, agree to the <a href={conditions}>terms and conditions</a> of
              bikeTherapist
            </label>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
            <hr />
          </div>
          <div>
            <Link href="/fix-date">
              <button>&larr; Back</button>
            </Link>
            <button onClick={displayRazorPay}>Next &rarr;</button>
          </div>
        </div>
      </div>
      <div className={styles.end}></div>
    </>
  );
};

export default UserDetails;
