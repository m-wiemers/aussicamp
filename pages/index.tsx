import LinkButton from "../components/button/LinkButton";
import Logo from "../components/logo/Logo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.logo}>
          <Logo subtitle={true} />
        </div>
        <div className={styles.button}>
          <LinkButton label="here we go" link={"/settings"} />
        </div>
      </main>
    </div>
  );
}
