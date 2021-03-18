import { ChangeEventHandler } from "react";
import styles from "./SelectCity.module.css";

export type SelectProps = {
  label: string;
  value: string;
  onSelect: ChangeEventHandler<HTMLSelectElement>;
};

function SelectCity({ label, value, onSelect }: SelectProps) {
  return (
    <div className={styles.container}>
      <label className="label">
        {label}
        <select
          className={styles.cityselect}
          name="StartCity"
          onChange={onSelect}
        >
          <option className={styles.option} value={value}>
            {value[0]}
          </option>
          <option className={styles.option} value={value}>
            {value[1]}
          </option>
          <option className={styles.option} value={value}>
            {value[2]}
          </option>
        </select>
      </label>
    </div>
  );
}

export default SelectCity;
