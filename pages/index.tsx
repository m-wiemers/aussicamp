import Head from "next/head";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
