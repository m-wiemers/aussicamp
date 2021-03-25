import Link from "next/link";
import DragIcon from "../icons/DragIcon";
import EditIcon from "../icons/EditIcon";
import styles from "./PlanDetails.module.css";

export type PlanDetailProps = {
  label: number;
  link: string;
  cityName: string;
  places: number;
};

function PlanDetails({ label, cityName, link, places }: PlanDetailProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.days}>Day {label}</h3>
      <Link href={link}>
        <div className={styles.component}>
          <h2 className={styles.city}>{cityName}</h2>
          <p className={styles.places}>- {places} places</p>
          <span className={styles.editIcon}>
            <EditIcon />
          </span>
          <span className={styles.DragIcon}>
            <DragIcon />
          </span>
        </div>
      </Link>
    </div>
  );
}

export default PlanDetails;
