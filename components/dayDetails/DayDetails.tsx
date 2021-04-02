import Link from "next/link";
import LocationIcon from "../icons/LocationIcon";
import TrashIcon from "../icons/TrashIcon";
import styles from "./DayDetails.module.css";

export type DayDetailsProps = {
  cityName: string;
  campSiteName: string;
  image: string;
  linkToLocation: string;
};

function DayDetails({
  cityName,
  campSiteName,
  image,
  linkToLocation,
}: DayDetailsProps) {
  return (
    <Link href={linkToLocation}>
      <div className={styles.container}>
        <p className={styles.city}>{cityName}</p>
        <button className={styles.btn}>
          <TrashIcon />
        </button>
        <img className={styles.image} src={image} alt="CampsitePic" />
        <p className={styles.campSite}>{campSiteName}</p>
        <LocationIcon />
      </div>
    </Link>
  );
}

export default DayDetails;
