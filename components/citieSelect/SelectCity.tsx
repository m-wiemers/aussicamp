import { ChangeEventHandler } from "react";
import styles from "./SelectCity.module.css";

export type SelectProps = {
  label: string;
  selected: string;
  value: string[];
  onSelect: ChangeEventHandler<HTMLSelectElement>;
};

function SelectCity({ label, selected, value, onSelect }: SelectProps) {
  selected = selected || "Sydney";
  const cities = value.map((city) => <option key={city}>{city}</option>);
  return (
    <div className={styles.container}>
      <label className="label">
        {label}
        <select
          className={styles.cityselect}
          name="StartCity"
          onChange={onSelect}
          value={selected}
        >
          {cities}
        </select>
      </label>
    </div>
  );
}

export default SelectCity;
