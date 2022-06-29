import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Cities in the world 🌍</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
