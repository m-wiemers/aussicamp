import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import styles from "../styles/app.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>AussiCamp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={router.pathname !== "/" ? styles.div : styles.divhome}>
        <div className={styles.header}>
          {router.pathname !== "/" && <Header />}
        </div>
        <div className={styles.content}>
          <Component {...pageProps} />
        </div>
        <div className={styles.footer}>
          {router.pathname !== "/" && <Footer activeButton={router.pathname} />}
        </div>
      </div>
    </>
  );
}

export default MyApp;
