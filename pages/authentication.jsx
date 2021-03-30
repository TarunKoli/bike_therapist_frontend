import Head from "next/head";
import AuthForm from "../components/authComponents/AuthForm";

const Authentication = () => {
  return (
    <section id="authentication">
      <Head>
        <meta
          title="Sign In"
          content="this is the user authentication page for the biketherapist"
        />
        <title>Sign In</title>
      </Head>
      <AuthForm />
    </section>
  );
};

export default Authentication;
