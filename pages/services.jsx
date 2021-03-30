import Head from "next/head";
import Landing from "../components/serviceComponents/Landing";
import Bike from "../components/serviceComponents/Bike";
const Services = () => {
  return (
    <section id="services">
      <Head>
        <title>Our Services</title>
        <meta
          name="description"
          content="this page give information about the services that we provide through bike therapist"
        />
      </Head>
      <Landing />
      <Bike />
    </section>
  );
};
export default Services;
