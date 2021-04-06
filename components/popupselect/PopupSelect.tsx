import { ChangeEventHandler, FormEventHandler } from "react";
import styles from "./PopupSelect.module.css";
import { Day } from "../../utils/types";

export type PopupSelectProps = {
  days: Day[];
  label: string;
  buttonLabel: string;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

function PopupSelect({
  days,
  label,
  handleSubmit,
  onChange,
  buttonLabel,
}: PopupSelectProps) {
  const daySelect = days.map((day) => (
    <option value={day.id} key={day.id}>
      {`Day ${day.id} - ${day.label}` || day.id}
    </option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.label}>{label}</div>
      <select onChange={onChange} className={styles.select}>
        {daySelect}
      </select>
      <button className={styles.btn} type="submit">
        {buttonLabel}
      </button>
    </form>
  );
}

export default PopupSelect;
