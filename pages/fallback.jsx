import Head from "next/head";

const Fallback = () => {
  return (
    <section id="fallback">
      <Head>
        <meta content="offline page for biketherapist" />
        <title>BikeTherapist</title>
      </Head>
      <h1>This is a offline fallback page.</h1>
      <h2>When offline any router will fallback to this page.</h2>
    </section>
  );
};
export default Fallback;
