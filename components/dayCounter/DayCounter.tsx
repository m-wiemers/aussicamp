import styles from "./DayCounter.module.css";

export type DayCounterProps = {
  label: string;
  days: number;
  secondLabel: string;
};

function DayCounter({ label, days, secondLabel }: DayCounterProps) {
  if (days <= 1 || days === undefined) {
    return (
      <div className={styles.container}>
        <p></p>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <p>
          {label} {days} {secondLabel}
        </p>
      </div>
    );
  }
}

export default DayCounter;
