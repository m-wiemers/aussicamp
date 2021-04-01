import { MouseEventHandler } from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import styles from "./ClickButton.module.css";

export type ClickButtonProps = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function ClickButton({ label, onClick }: ClickButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {label}
      <span className={styles.icon}>
        <ArrowRightIcon />
      </span>
    </button>
  );
}

export default ClickButton;
