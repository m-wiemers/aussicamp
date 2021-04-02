import { ChangeEventHandler } from "react";
import styles from "./PopupSelect.module.css";

export type PopupSelectProps = {
  days: string[];
  label: string;
  selected: string;
  onSelect: ChangeEventHandler<HTMLSelectElement>;
};

function PopupSelect({ days, label, selected, onSelect }: PopupSelectProps) {
  const daySelect = days.map((day, index) => (
    <option key={index}>{`Day ${index + 1} - ${day}` || index + 1}</option>
  ));

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select} value={selected} onChange={onSelect}>
        {daySelect}
      </select>
    </div>
  );
}

export default PopupSelect;
