import Head from "next/head";
import Landing from "../components/pricingComponents/Landing";
const Pricing = () => {
  return (
    <section id="pricing">
      <Head>
        <meta
          title="description"
          content="this is the pricing page of biketherapist"
        />
        <title>Pricing</title>
      </Head>
      <Landing />
    </section>
  );
};

export default Pricing;
