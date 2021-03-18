import { ChangeEventHandler } from "react";
import styles from "./SelectCity.module.css";

export type SelectProps = {
  label: string;
  value: string[];
  onSelect: ChangeEventHandler<HTMLSelectElement>;
};

function SelectCity({ label, value, onSelect }: SelectProps) {
  const cities = value.map((city) => <option key={city}>{city}</option>);
  return (
    <div className={styles.container}>
      <label className="label">
        {label}
        <select
          className={styles.cityselect}
          name="StartCity"
          onChange={onSelect}
        >
          {cities}
        </select>
      </label>
    </div>
  );
}

export default SelectCity;
