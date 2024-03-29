import Head from "next/head";
import { parseCookies } from "nookies";
import axios from "axios";
import SidePanel from "../components/adminComponents/SidePanel";
import DashBoard from "../components/adminComponents/DashBoard";
import styles from "../styles/adminDashboard/sidepanel.module.css";

const adminDashBoard = ({
  data,
  paymentData,
  adminRes,
  payCount,
  serviceCount,
}) => {
  return (
    <section id="dashboard">
      <Head>
        <meta
          title="Admin/DashBoard"
          content="this is the pricing page of biketherapist Admin"
        />
        <title>Admins DashBoard</title>
      </Head>
      <div className={styles.main}>
        <SidePanel adminRes={adminRes} />
        <DashBoard
          clientsData={data}
          paymentData={paymentData}
          payCount={payCount}
          serviceCount={serviceCount}
        />
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/clients`,
    {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
    }
  );
  const data = await res.json();

  const paymentRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments`,
    {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
    }
  );

  const paymentData = await paymentRes.json();

  let admin = null;
  let adminRes = null;
  if (context.req.headers.cookie) {
    admin = await axios({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-user`,
      headers: context.req ? { cookie: context.req.headers.cookie } : undefined,
    });

    adminRes = admin.data;
  }

  const pay = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/money-counts`,
    {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
    }
  );

  const payCount = await pay.json();

  const services = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/counts`,
    {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
    }
  );

  const serviceCount = await services.json();

  return {
    props: { data, paymentData, adminRes, payCount, serviceCount },
  };
}

export default adminDashBoard;
