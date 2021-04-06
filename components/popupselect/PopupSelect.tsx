import { ChangeEventHandler, FormEventHandler } from "react";
import styles from "./PopupSelect.module.css";

export type PopupSelectProps = {
  days: string[];
  label: string;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

function PopupSelect({
  days,
  label,
  handleSubmit,
  onChange,
}: PopupSelectProps) {
  const daySelect = days.map((day, index) => (
    <option key={index}>{`Day ${index + 1} - ${day}` || index + 1}</option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>{label}</label>
      <select onChange={onChange} className={styles.select}>
        {daySelect}
      </select>
      <button className={styles.btn} type="submit">
        Add
      </button>
    </form>
  );
}

export default PopupSelect;
