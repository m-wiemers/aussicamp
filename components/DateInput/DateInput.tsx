import { ChangeEventHandler } from "react";
import styles from "./DateInput.module.css";

export type DateProps = {
  label: string;
  onDateSelect: ChangeEventHandler<HTMLInputElement>;
};

function DateInput({ label, onDateSelect }: DateProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        onChange={onDateSelect}
        className={styles.date}
        type="date"
        min="2020-03-17"
        max="2024-12-31"
      />
    </div>
  );
}

export default DateInput;
