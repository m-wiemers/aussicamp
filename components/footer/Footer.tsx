import MapIcon from "../icons/MapIcon";
import ListIcon from "../icons/ListIcon";
import styles from "./Footer.module.css";
import CalenderIcon from "../icons/CalenderIcon";
import SettingIcon from "../icons/SettingIcon";

export type FooterProps = {
  isActive: string;
};

function Footer({ isActive }: FooterProps) {
  return (
    <div className={styles.footer}>
      <button
        className={`${styles.button} ${
          isActive === "list" ? styles.buttonActive : ""
        }`}
      >
        <ListIcon />
      </button>
      <button
        className={`${styles.button} ${
          isActive === "calender" ? styles.buttonActive : ""
        }`}
      >
        <CalenderIcon />
      </button>
      <button
        className={`${styles.button} ${
          isActive === "map" ? styles.buttonActive : ""
        }`}
      >
        <MapIcon />
      </button>
      <button
        className={`${styles.button} ${
          isActive === "settings" ? styles.buttonActive : ""
        }`}
      >
        <SettingIcon />
      </button>
    </div>
  );
}

export default Footer;
