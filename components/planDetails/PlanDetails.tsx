import Link from "next/link";
import { ChangeEventHandler } from "react";
import DragIcon from "../icons/DragIcon";
import EditIcon from "../icons/EditIcon";
import styles from "./PlanDetails.module.css";

export type PlanDetailProps = {
  label: number;
  linkToCity: string;
  linkToDay: string;
  cityName: string;
  places: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function PlanDetails({
  label,
  cityName,
  linkToCity,
  linkToDay,
  places,
  onChange,
}: PlanDetailProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.days}>Day {label}</h3>
      <div className={styles.component}>
        {cityName.toLocaleLowerCase() === "no city" ? (
          <input
            placeholder="Type Your City"
            className={styles.input}
            onChange={onChange}
            type="text"
          />
        ) : (
          <Link href={linkToCity}>
            <h2 className={styles.city}>{cityName}</h2>
          </Link>
        )}
        ;<p className={styles.places}>- {places} places</p>
        <Link href={linkToDay}>
          <span className={styles.editIcon}>
            <EditIcon />
          </span>
        </Link>
        <span className={styles.DragIcon}>
          <DragIcon />
        </span>
      </div>
    </div>
  );
}

export default PlanDetails;
