import AussiTentIcon from "../icons/AussiTentIcon";
import styles from "./Logo.module.css";

export type LogoProps = {
  subtitle: boolean;
};

function Logo({ subtitle }: LogoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.logoText}>
        <AussiTentIcon className={styles.logo} />
        ussiCamp
      </div>
      {subtitle && <p className={styles.subtitle}>plan your next adventure</p>}
    </div>
  );
}

export default Logo;
