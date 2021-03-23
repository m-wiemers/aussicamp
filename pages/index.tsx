import Head from "next/head";
import Button from "../components/button/Button";
import Logo from "../components/logo/Logo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AussiCamp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <Logo subtitle={true} />
        </div>
        <div className={styles.button}>
          <Button label="here we go" link={"/settings"} />
        </div>
      </main>
    </div>
  );
}
