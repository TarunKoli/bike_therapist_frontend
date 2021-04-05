import { useState, useEffect, useContext } from "react";
import moment from "moment";
import { SideContext } from "./SideContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/adminDashboard/invoices.module.css";
import Status from "./Status";

const Payments = ({ clientsData, paymentData }) => {
  const [modal, setModal] = useState(false);
  const [clientId, setClientId] = useState();
  const [name, setName] = useState();
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
    if (!clientId || !name) {
      return setError("Please fill the required fields");
    }
    var client = clientsData.filter((client) => {
      return client._id === clientId && client.name === name;
    });
    if (client.length === 0) {
      return setError("No User Found");
    }
    var payment = paymentData.filter((payment) => {
      return payment.paymentId === client[0].payId;
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
      <fieldset>
        <div className={styles.invoice}>
          <div>
            <legend>
              <h1>Clients</h1>
              <p>Dashboard / Clients</p>
            </legend>
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
                setClientId(e.target.value);
              }}
            />
            <label>Client ID</label>
            <datalist id="clientId">
              {clientsData.map((client, index) => {
                return <option value={client._id} key={index} />;
              })}
            </datalist>
          </div>
          <div className={styles.wrapper}>
            <input
              type="text"
              list="clientName"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Name</label>
            <datalist id="clientName">
              {clientsData.map((client, index) => {
                return <option value={client.name} key={index} />;
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
                    <span>Date : </span>
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
      </fieldset>
      <div className={styles.table3}>
        <table border="1">
          <thead>
            <tr>
              <th>Client ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Brand</th>
              <th>Varient</th>
              <th>Date</th>
              <th>Timing</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {clientsData.map((client, index) => {
              return (
                <tr key={index}>
                  <td>{client._id}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.brand}</td>
                  <td>{client.variant}</td>
                  <td>{moment(client.bookingDate).format("MMMM Do YYYY")}</td>
                  <td>{client.bookingTime}</td>
                  <td>{client.phone}</td>
                  <td className={styles.decide}>
                    <Status id={client._id} status={client.status} />
                  </td>
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
