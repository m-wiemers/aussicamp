import styles from "./DayCounter.module.css";

export type DayCounterProps = {
  label: string;
  days: number;
  secondLabel: string;
};

function DayCounter({ label, days, secondLabel }: DayCounterProps) {
  return (
    <div className={styles.container}>
      <p className={styles.font}>{`${label} ${days} ${secondLabel}`}</p>
    </div>
  );
}

export default DayCounter;
