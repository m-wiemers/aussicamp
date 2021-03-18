import Head from "next/head";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AussiCamp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Wilkommen</h1>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
