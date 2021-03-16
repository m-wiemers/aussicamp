import styles from "./DateInput.module.css";

export type DateProps = {
  label: string;
};

function DateInput({ label }: DateProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input className={styles.date} type="date" value="2020-07-22" />
    </div>
  );
}

export default DateInput;
