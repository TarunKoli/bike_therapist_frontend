import Head from "next/head";
import dynamic from "next/dynamic";
import style from "../styles/howItWorks/Landing.module.css";

const Model = dynamic(() => import("../components/howItWorks/Landing"), {
  ssr: false,
  loading: () => {
    return (
      <div className={style.loading}>
        <img src="/preloader.gif" alt="preloader" />
      </div>
    );
  },
});

const HowItWorks = () => {
  return (
    <section id="how">
      <Head>
        <meta
          title="description"
          content="this page will show you how biketherapist works and what are its functionality"
        />
        <title>How It Works ?</title>
      </Head>
      <Model />
    </section>
  );
};
export default HowItWorks;
