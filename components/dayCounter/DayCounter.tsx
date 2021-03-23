import { useEffect, useState } from "react";
import styles from "./DayCounter.module.css";

export type DayCounterProps = {
  label: string;
  lastDate: string;
  startDate: string;
  secondLabel: string;
};

function DayCounter({
  label,
  lastDate,
  startDate,
  secondLabel,
}: DayCounterProps) {
  const [dayCount, setDayCount] = useState(null);

  useEffect(() => {
    const firstDate = new Date(startDate);
    const endDate = new Date(lastDate);
    const differentInTime = endDate.getTime() - firstDate.getTime();
    const differentInDays = differentInTime / (1000 * 60 * 60 * 24) + 1;
    setDayCount(differentInDays);
  }, [startDate, lastDate]);

  if (dayCount <= 1) {
    return (
      <div className={styles.container}>
        <p></p>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <p>
          {label} {dayCount} {secondLabel}
        </p>
      </div>
    );
  }
}

export default DayCounter;
