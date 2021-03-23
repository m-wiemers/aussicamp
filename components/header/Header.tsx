import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <Link href="/">
      <div className={styles.container}>
        <Logo subtitle={false} />
      </div>
    </Link>
  );
}

export default Header;
