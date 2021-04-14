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
  const activitySelect = activities.map((avtivity) => (
    <option defaultValue={selected} key={avtivity}>
      {avtivity}
    </option>
  ));
  return (
    <>
      <select className={styles.select} onChange={onSelect} value={selected}>
        <option selected value={defaultValue}>
          Choose Activity
        </option>
        {activitySelect}
      </select>
    </>
  );
}

export default ActivitySelect;
