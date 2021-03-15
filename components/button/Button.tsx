import ArrowRightIcon from "../icons/ArrowRightIcon";
import styles from "./Button.module.css";

export type ButtonProps = {
  label: string;
};

function Button({ label }: ButtonProps) {
  return (
    <button className={styles.btn}>
      {label}
      <span className={styles.icon}>
        <ArrowRightIcon />
      </span>
    </button>
  );
}

export default Button;
