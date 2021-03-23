import { ChangeEventHandler } from "react";
import styles from "./DateInput.module.css";

export type DateProps = {
  label: string;
  value: string;
  onDateSelect: ChangeEventHandler<HTMLInputElement>;
};

function DateInput({ label, onDateSelect, value }: DateProps) {
  return (
    <div className={styles.container}>
      <label className="label">
        {label}
        <input
          className={styles.date}
          onChange={onDateSelect}
          type="date"
          value={value}
        />
      </label>
    </div>
  );
}

export default DateInput;
