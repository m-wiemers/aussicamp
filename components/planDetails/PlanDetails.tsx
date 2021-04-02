import Link from "next/link";
import DragIcon from "../icons/DragIcon";
import EditIcon from "../icons/EditIcon";
import styles from "./PlanDetails.module.css";

export type PlanDetailProps = {
  label: number;
  linkToCity: string;
  linkToDay: string;
  cityName: string;
  places: number;
};

function PlanDetails({
  label,
  cityName,
  linkToCity,
  linkToDay,
  places,
}: PlanDetailProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.days}>Day {label}</h3>
      <div className={styles.component}>
        <Link href={linkToCity}>
          <h2 className={styles.city}>{cityName}</h2>
        </Link>
        <p className={styles.places}>- {places} places</p>
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
