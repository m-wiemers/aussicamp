import Link from "next/link";
import styles from "./DayDetailHead.module.css";

export type DayDetailHeadProps = {
  day: string;
  nextPage: string;
  prePage: string;
};

function DayDetailHead({ day, nextPage, prePage }: DayDetailHeadProps) {
  return (
    <div className={styles.container}>
      <Link href={prePage}>
        <img className={styles.preBtn} src="/previous.svg" alt="prev Page" />
      </Link>
      <h3 className={styles.city}>{day}</h3>
      <Link href={nextPage}>
        <img className={styles.nextBtn} src="/next.svg" alt="next Page" />
      </Link>
    </div>
  );
}

export default DayDetailHead;
