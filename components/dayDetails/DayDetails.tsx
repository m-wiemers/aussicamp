import Link from "next/link";
import { MouseEventHandler } from "react";
import LocationIcon from "../icons/LocationIcon";
import TrashIcon from "../icons/TrashIcon";
import styles from "./DayDetails.module.css";

export type DayDetailsProps = {
  cityName: string;
  campSiteName: string;
  linkToCity: string;
  image: string;
  linkToLocation: string;
  onDeleteClick: MouseEventHandler<HTMLButtonElement>;
};

function DayDetails({
  cityName,
  campSiteName,
  image,
  linkToLocation,
  linkToCity,
  onDeleteClick,
}: DayDetailsProps) {
  return (
    <>
      <li className={styles.container}>
        <Link href={linkToCity}>
          <p className={styles.city}>{cityName}</p>
        </Link>
        <button className={styles.btn} onClick={onDeleteClick}>
          <TrashIcon />
        </button>
        <img className={styles.image} src={image} alt="CampsitePic" />
        <p className={styles.campSite}>{campSiteName}</p>
        <Link href={linkToLocation}>
          <>
            <LocationIcon />
          </>
        </Link>
      </li>
    </>
  );
}

export default DayDetails;
