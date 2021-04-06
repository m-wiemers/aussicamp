import Link from "next/link";
import { MouseEventHandler } from "react";
import LocationIcon from "../icons/LocationIcon";
import TrashIcon from "../icons/TrashIcon";
import styles from "./DayDetails.module.css";

export type DayDetailsProps = {
  cityName: string;
  campSiteName: string;
  image: string;
  linkToLocation: string;
  onDeleteClick: MouseEventHandler<HTMLButtonElement>;
};

function DayDetails({
  cityName,
  campSiteName,
  image,
  linkToLocation,
  onDeleteClick,
}: DayDetailsProps) {
  return (
    <Link href={linkToLocation}>
      <li className={styles.container}>
        <p className={styles.city}>{cityName}</p>
        <button className={styles.btn} onClick={onDeleteClick}>
          <TrashIcon />
        </button>
        <img className={styles.image} src={image} alt="CampsitePic" />
        <p className={styles.campSite}>{campSiteName}</p>
        <LocationIcon />
      </li>
    </Link>
  );
}

export default DayDetails;
