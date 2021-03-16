import AussiTentIcon from "../icons/AussiLogoTent";
import styles from "./Logo.module.css";

export type LogoProps = {
  subTitle: boolean;
};

function Logo({ subTitle }: LogoProps) {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>
        <AussiTentIcon />
      </span>
      <p className={styles.logotext}>ussiCamp</p>
      {subTitle && <p className={styles.subtitle}>plan your next adventure</p>}
    </div>
  );
}

export default Logo;
