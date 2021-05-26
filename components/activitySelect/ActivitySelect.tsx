import { ChangeEventHandler } from "react";
import styles from "./ActivitySelect.module.css";

export type ActivitySelectProps = {
  activities: string[];
  selected: string;
  defaultValue: string;
  onSelect: ChangeEventHandler<HTMLSelectElement>;
};

function ActivitySelect({
  activities,
  onSelect,
  selected,
  defaultValue,
}: ActivitySelectProps) {
  const activitySelect = activities.map((activity) => (
    <option defaultValue={selected} key={activity}>
      {activity}
    </option>
  ));
  return (
    <>
      <select className={styles.select} onChange={onSelect} value={selected}>
        <option selected value={defaultValue}>
          {defaultValue}
        </option>
        {activitySelect}
      </select>
    </>
  );
}

export default ActivitySelect;
