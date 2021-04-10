import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import { SideContext } from "./SideContext";
import Barchart from "./Barchart";
import Status from "./Status";
import styles from "../../styles/adminDashboard/dashboard.module.css";

const DashBoard = (props) => {
  const [clients, setClients] = useState(props.clientsData);
  const [payments, setPayments] = useState(props.paymentData);
  const [hide, setHide] = useContext(SideContext);
  const [total, setTotal] = useState(30000);
  const [today, setToday] = useState(5000);
  const [refund, setRefund] = useState(10000);

  const handleHide = () => {
    setHide((prev) => !prev);
  };

  if (props.payCount.count / 100 >= total) setTotal((prev) => prev + 10000);
  if (props.payCount.total / 100 >= today) setToday((prev) => prev + 5000);

  return (
    <div className={styles.dashboard}>
      <div className={styles.welcome}>
        <div>
          <h1>Welcome Admin!</h1>
          <p>Dashboard</p>
        </div>
        <div className={styles.hide} onClick={handleHide}>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>

      <div className={styles.first}>
        <div className={styles.f1}>
          <div className={styles.icon}>
            <div>
              <i className="fas fa-tools fa-4x"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>{props.serviceCount.pend}</h1>
              <p>Today's Services</p>
            </div>
          </div>
        </div>

        <div className={styles.f2}>
          <div className={styles.icon}>
            <div>
              <i className="fas fa-users-cog fa-4x"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>{props.serviceCount.accept}</h1>
              <p>Accepted</p>
            </div>
          </div>
        </div>

        <div className={styles.f3}>
          <div className={styles.icon}>
            <div>
              <i className="fas fa-phone-volume fa-4x"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>{props.serviceCount.prog}</h1>
              <p>In Progress</p>
            </div>
          </div>
        </div>

        <div className={styles.f4}>
          <div className={styles.icon}>
            <div>
              <i className="fas fa-cogs fa-4x"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>{props.serviceCount.done}</h1>
              <p>Today's Done</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.second}>
        <div className={styles.s1}>
          <div>
            <h1>Total Earnings</h1>
          </div>
          <div className={styles.progress}>
            <h1>
              <i className="fas fa-rupee-sign"></i> {props.payCount.count / 100}
            </h1>
            <progress value={props.payCount.count / 100} max={total}></progress>
          </div>
          <div>
            <p>Earnings out of {total}.</p>
          </div>
        </div>

        <div className={styles.s2}>
          <div>
            <h1>Today's Earning</h1>
          </div>
          <div className={styles.progress}>
            <h1>
              <i className="fas fa-rupee-sign"></i> {props.payCount.total / 100}
            </h1>
            <progress value={props.payCount.total / 100} max={today}></progress>
          </div>
          <div>
            <p>Earnings out of {today}.</p>
          </div>
        </div>

        <div className={styles.s3}>
          <div>
            <h1>Refund</h1>
          </div>
          <div className={styles.progress}>
            <h1>81</h1>
            <progress value="15" max="20"></progress>
          </div>
          <div>
            <p>Refund out of 256.</p>
          </div>
        </div>

        <div className={styles.s4}>
          <div>
            <h1>Total Services</h1>
          </div>
          <div className={styles.progress}>
            <h1>{props.serviceCount.total}</h1>
            <progress value={props.serviceCount.total} max="100"></progress>
          </div>
          <div>
            <p>Total Services out of 100.</p>
          </div>
        </div>
      </div>

      <div className={styles.third}>
        <div className={styles.t1}>
          <div className={styles.heading}>
            <p>Total Revenue</p>
          </div>

          <div className={styles.table1}>
            <Barchart paymentData={props.paymentData} />
          </div>
        </div>

        <div className={styles.t2}>
          <div className={styles.heading}>
            <p>Payments</p>
          </div>

          <div className={styles.table1}>
            <table>
              <thead>
                <tr>
                  <th>Payment Id</th>
                  <th>Email</th>
                  <th>Paid Date</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => {
                  return (
                    <tr key={index}>
                      <td>{payment.paymentId}</td>
                      <td>{payment.email}</td>
                      <td>
                        {moment(payment.createdAt).format("MMMM Do YYYY")}
                      </td>
                      <td>{`₹ ${payment.amount / 100} /-`}</td>
                      <td>{payment.type}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className={styles.view}>
            <Link href="/payments">
              <p>View all payments</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.fourth}>
        <div className={styles.fo1}>
          <div className={styles.heading}>Clients</div>
          <div className={styles.table2}>
            <table>
              <thead>
                <tr>
                  <th>client id</th>
                  <th>client</th>
                  <th>email</th>
                  <th>brand</th>
                  <th>varient</th>
                  <th>date</th>
                  <th>timing</th>
                  <th>phone no.</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => {
                  return (
                    <tr key={index}>
                      <td>{client._id}</td>
                      <td>{client.name}</td>
                      <td>{client.email}</td>
                      <td>{client.brand}</td>
                      <td>{client.variant}</td>
                      <td className={styles.bookingDate}>
                        {moment(client.bookingDate).format("MMMM Do YYYY")}
                      </td>
                      <td className={styles.bookingTime}>
                        {client.bookingTime}
                      </td>
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

          <Link href="/clients">
            <div className={styles.view}>View all the Clients</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

//{{moment(task.deadLine).format('MMMM Do YYYY, h:mm:ss a')}}

export default DashBoard;
