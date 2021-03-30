import Head from "next/head";
import Landing from "../components/aboutComponents/Landing";
import Engine from "../components/aboutComponents/Engine";
import Worker from "../components/aboutComponents/Worker";
import Welding from "../components/aboutComponents/Welding";
const About = () => {
  return (
    <section id="about">
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="this is the about us page for bike therapist"
        />
      </Head>
      <Landing />
      <Engine />
      <Worker />
      <Welding />
    </section>
  );
};

export default About;
