import MapIcon from "../icons/MapIcon";
import ListIcon from "../icons/ListIcon";
import styles from "./Footer.module.css";
import CalenderIcon from "../icons/CalenderIcon";
import SettingIcon from "../icons/SettingIcon";
import Link from "next/link";

export type FooterProps = {
  activeButton: "list" | "calendar" | "map" | "settings";
};

function Footer({ activeButton: isActive }: FooterProps) {
  return (
    <div className={styles.footer}>
      <Link href="/list">
        <div
          className={`${styles.button} ${
            isActive === "list" ? styles.buttonActive : ""
          }`}
        >
          <ListIcon />
        </div>
      </Link>
      <Link href="/calendar">
        <div
          className={`${styles.button} ${
            isActive === "calendar" ? styles.buttonActive : ""
          }`}
        >
          <CalenderIcon />
        </div>
      </Link>
      <Link href="/map">
        <div
          className={`${styles.button} ${
            isActive === "map" ? styles.buttonActive : ""
          }`}
        >
          <MapIcon />
        </div>
      </Link>
      <Link href="/settings">
        <div
          className={`${styles.button} ${
            isActive === "settings" ? styles.buttonActive : ""
          }`}
        >
          <SettingIcon />
        </div>
      </Link>
    </div>
  );
}

export default Footer;
