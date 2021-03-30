import Head from "next/head";
import Landing from "../components/contactComponents/Landing";
const ContactUs = () => {
  return (
    <section id="contact-us">
      <Head>
        <meta title="description" content="you can contact us from this page" />
        <title>Contact Us</title>
      </Head>
      <Landing />
    </section>
  );
};

export default ContactUs;
