import MapIcon from "../icons/MapIcon";
import ListIcon from "../icons/ListIcon";
import styles from "./Footer.module.css";
import CalenderIcon from "../icons/CalenderIcon";
import SettingIcon from "../icons/SettingIcon";

function Footer() {
  return (
    <div className={styles.footer}>
      <button className={styles.button}>
        <ListIcon />
      </button>
      <button className={styles.button}>
        <CalenderIcon />
      </button>
      <button className={styles.button}>
        <MapIcon />
      </button>
      <button className={styles.button}>
        <SettingIcon />
      </button>
    </div>
  );
}

export default Footer;
