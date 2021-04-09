import Link from "next/link";
import styles from "./DayDetailHead.module.css";

export type DayDetailHeadProps = {
  cityName: string;
  nextPage: string;
  prePage: string;
};

function DayDetailHead({ cityName, nextPage, prePage }: DayDetailHeadProps) {
  return (
    <div className={styles.container}>
      <Link href={prePage}>
        <img className={styles.preBtn} src="/previous.svg" alt="prev Page" />
      </Link>
      <h3 className={styles.city}>{cityName}</h3>
      <Link href={nextPage}>
        <img className={styles.nextBtn} src="/next.svg" alt="next Page" />
      </Link>
    </div>
  );
}

export default DayDetailHead;
