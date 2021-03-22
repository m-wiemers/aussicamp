import MapIcon from "../icons/MapIcon";
import ListIcon from "../icons/ListIcon";
import styles from "./Footer.module.css";
import CalenderIcon from "../icons/CalenderIcon";
import SettingIcon from "../icons/SettingIcon";

export type FooterProps = {
  activeButton: "list" | "calendar" | "map" | "settings";
};

function Footer({ activeButton: isActive }: FooterProps) {
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
          isActive === "calendar" ? styles.buttonActive : ""
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
