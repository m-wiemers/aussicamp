import { MouseEventHandler } from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import styles from "./Button.module.css";

export type ButtonProps = {
  label: string;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
};

function Button({ label, onButtonClick }: ButtonProps) {
  return (
    <button className={styles.btn} onClick={onButtonClick}>
      {label}
      <span className={styles.icon}>
        <ArrowRightIcon />
      </span>
    </button>
  );
}

export default Button;
