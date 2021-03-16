import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "../components/button/Button";
import Logo from "../components/logo/Logo";
import SearchInput from "../components/input/SearchInput";
import DateInput from "../components/DateInput/DateInput";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button label="HERE WE GO" />
        <Logo subTitle={true} />
        <SearchInput />
        <DateInput label="When does it start?" />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
