import { useState, useEffect, useContext } from "react";
import moment from "moment";
import { SideContext } from "./SideContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/adminDashboard/invoices.module.css";

const Payments = ({ clientsData, paymentData }) => {
  const [modal, setModal] = useState(false);
  const [payId, setPayId] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState(null);
  const [client, setClient] = useState({
    _id: "",
    brand: "",
    variant: "",
    bookingDate: "",
    bookingTime: "",
    name: "",
    email: "",
    phone: "",
    houseNumber: "",
    streetNumber: "",
    city: "",
    state: "",
    postalCode: "",
    dob: "",
  });
  const [payment, setPayment] = useState({
    paymentId: "",
    orderId: "",
    amount: "",
    paidDate: "",
    type: "",
  });
  const [hide, setHide] = useContext(SideContext);

  const handleHide = () => {
    setHide((prev) => !prev);
  };

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

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const searchUser = () => {
    if (!payId || !email) {
      return setError("Please fill the required fields");
    }
    var payment = paymentData.filter((payment) => {
      return payment.paymentId === payId && payment.email === email;
    });
    if (payment.length === 0) {
      return setError("No User Found");
    }
    var client = clientsData.filter((client) => {
      return client.email === payment[0].email;
    });

    setClient({
      _id: client[0]._id,
      brand: client[0].brand,
      variant: client[0].variant,
      bookingDate: client[0].bookingDate,
      bookingTime: client[0].bookingTime,
      name: client[0].name,
      email: client[0].email,
      phone: client[0].phone,
      houseNumber: client[0].houseNumber,
      streetNumber: client[0].streetNumber,
      city: client[0].city,
      state: client[0].state,
      postalCode: client[0].postalCode,
      dob: client[0].dob,
    });
    setPayment({
      paymentId: payment[0].paymentId,
      orderId: payment[0].orderId,
      amount: payment[0].amount,
      paidDate: payment[0].createdAt,
      type: payment[0].type,
    });
    handleModal();
  };

  return (
    <div className={styles.invoices}>
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
        className={styles.myToast}
      />
      <div className={styles.invoice}>
        <div>
          <h1>Payments</h1>
          <p>Dashboard / Payments</p>
        </div>
        <div className={styles.hide} onClick={handleHide}>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
      <div className={styles.search}>
        <div className={styles.wrapper}>
          <input
            type="text"
            list="clientId"
            required
            onChange={(e) => {
              setPayId(e.target.value);
            }}
          />
          <label>Payment ID</label>
          <datalist id="clientId">
            {paymentData.map((client, index) => {
              return <option value={client.paymentId} key={index} />;
            })}
          </datalist>
        </div>
        <div className={styles.wrapper}>
          <input
            type="text"
            list="clientName"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Email</label>
          <datalist id="clientName">
            {paymentData.map((client, index) => {
              return <option value={client.email} key={index} />;
            })}
          </datalist>
        </div>

        <div className={styles.btn} onClick={searchUser}>
          <i className="fas fa-search"></i> &nbsp;&nbsp;SEARCH
        </div>

        <div className={`${styles.modal} ${modal ? styles.modalOn : ""}`}>
          <div className={styles.close} onClick={handleModal}>
            X
          </div>
          <div className={styles.modalIn}>
            <div className={styles.invo}>
              <div>
                <i className="fas fa-tools"></i>
                <h1>
                  <span>Bike</span>Therapist
                </h1>
              </div>
              <div>
                <h1>Client ID</h1>
                <p>#{client._id}</p>
                <h3>
                  <span>Latest : </span>
                  {moment(client.bookingDate).format("MMMM Do YYYY") +
                    " At " +
                    client.bookingTime}
                </h3>
              </div>
            </div>

            <div className={styles.userInfo}>
              <div>
                <h2>User Details</h2>
                <p>
                  <span>Name : </span>
                  {client.name}
                </p>
                <p>
                  <span>Email : </span>
                  {client.email}
                </p>
                <p>
                  <span>Phone : </span>
                  {client.phone}
                </p>
                <p>
                  <span>Dob : </span>
                  {moment(client.dob).format("MMMM Do YYYY")}
                </p>
                <p>
                  <span>Address : </span>H.no-{client.houseNumber}, Street.no-
                  {client.streetNumber}, {client.city}-{client.postalCode},
                  {" " + client.state}
                </p>
              </div>

              <div>
                <h2>Payment Details</h2>
                <p>
                  <span>PaymentId: </span>#{payment.paymentId}
                </p>
                <p>
                  <span>OrderId : </span>#{payment.orderId}
                </p>
                <p>
                  <span>Amount : </span>Rs.{payment.amount / 100}
                </p>
                <p>
                  <span>Type : </span>
                  {payment.type}
                </p>
                <p>
                  <span>Paid Date : </span>
                  {payment.paidDate.split("T")[0]}
                </p>
              </div>
            </div>

            <div className={styles.demand}>
              <h2>Service details</h2>
              <div>
                <p>Brand</p>
                <p>Varient</p>
                <p>Booking Date</p>
                <p>Booking Time</p>
              </div>
              <div>
                <p>{client.brand}</p>
                <p>{client.variant}</p>
                <p>{moment(client.bookingDate).format("MMMM Do YYYY")}</p>
                <p>{client.bookingTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.table3}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Payment ID</th>
              <th>Order ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Paid Date</th>
              <th>Payment Amount</th>
              <th>Payment Type</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{payment.paymentId}</td>
                  <td>{payment.orderId}</td>
                  <td>{payment.name}</td>
                  <td>{payment.email}</td>
                  <td>{payment.contact}</td>
                  <td>{moment(payment.createdAt).format("MMMM Do YYYY")}</td>
                  <td>{`₹ ${payment.amount / 100} /-`}</td>
                  <td>{payment.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
