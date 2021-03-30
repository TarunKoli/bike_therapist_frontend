import Head from "next/head";
import { parseCookies } from "nookies";
import axios from "axios";
import SidePanel from "../components/adminComponents/SidePanel";
import Clients from "../components/adminComponents/clients";
import styles from "../styles/adminDashboard/sidepanel.module.css";

const adminDashBoard = (props) => {
  return (
    <section id="dashboard">
      <Head>
        <meta
          title="client page"
          content="this is the client of biketherapist Admin"
        />
        <title>Clients</title>
      </Head>
      <div className={styles.main}>
        <SidePanel adminRes={props.adminRes} />
        <Clients clientsData={props.data} paymentData={props.paymentData} />
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  if (cookies) {
    if (!cookies.jwt) {
      context.res.writeHead(302, { Location: "/" });
      context.res.end();
    }
  } else {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
  }
  const res = await fetch("http://localhost:8080/api/clients", {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
  });
  const data = await res.json();

  // const admin = await fetch(
  //   `http://localhost:8080/api/get-user?token=${cookies.jwt}`,
  //   {
  //     method: "GET",
  //     mode: "cors",
  //     credentials: "include",
  //   }
  // );

  const paymentRes = await fetch("http://localhost:8080/api/payments", {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
  });
  const paymentData = await paymentRes.json();

  const admin = await axios({
    url: "http://localhost:8080/api/get-user",
    method: "GET",
    headers: context.req ? { cookie: context.req.headers.cookie } : undefined,
  });

  const adminRes = admin.data;

  return {
    props: { data, adminRes, paymentData },
  };
}

export default adminDashBoard;
