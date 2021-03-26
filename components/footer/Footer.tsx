import MapIcon from "../icons/MapIcon";
import ListIcon from "../icons/ListIcon";
import styles from "./Footer.module.css";
import CalenderIcon from "../icons/CalenderIcon";
import SettingIcon from "../icons/SettingIcon";
import Link from "next/link";

export type FooterProps = {
  activeButton: string;
};

function Footer({ activeButton: activeButton }: FooterProps) {
  return (
    <div className={styles.footer}>
      <Link href="/plan">
        <div
          className={`${styles.button} ${
            activeButton === "/plan" ? styles.buttonActive : ""
          }`}
        >
          <ListIcon />
        </div>
      </Link>
      <Link href="/calendar">
        <div
          className={`${styles.button} ${
            activeButton === "/calendar" ? styles.buttonActive : ""
          }`}
        >
          <CalenderIcon />
        </div>
      </Link>
      <Link href="/map">
        <div
          className={`${styles.button} ${
            activeButton === "/map" ? styles.buttonActive : ""
          }`}
        >
          <MapIcon />
        </div>
      </Link>
      <Link href="/settings">
        <div
          className={`${styles.button} ${
            activeButton === "/settings" ? styles.buttonActive : ""
          }`}
        >
          <SettingIcon />
        </div>
      </Link>
    </div>
  );
}

export default Footer;
