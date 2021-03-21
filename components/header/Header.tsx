import Logo from "../logo/Logo";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <Logo subtitle={false} />
      </button>
    </div>
  );
}

export default Header;
