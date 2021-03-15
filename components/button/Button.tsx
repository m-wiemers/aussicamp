import ArrowRightIcon from "../icons/ArrowRightIcon";
import styles from "./Button.module.css";

export type ButtonProps = {
  label: string;
};

function Button({ label }: ButtonProps) {
  return (
    <button className={styles.btn}>
      {label}
      <ArrowRightIcon />
    </button>
  );
}

export default Button;
