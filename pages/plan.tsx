import Head from "next/head";
import { useEffect, useState } from "react";
import PlanDetails from "../components/planDetails/PlanDetails";
import styles from "../styles/Plan.module.css";

export default function Plan() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const daysOfLS = localStorage.getItem("locations");
    if (daysOfLS === null) {
      window.alert("no days at your plan!");
      window.history.back();
    } else {
      setDays(JSON.parse(daysOfLS));
    }
  }, []);

  const day = days.map((day, index) => (
    <li key={index} className={styles.list}>
      <PlanDetails label={index + 1} cityName={day} link={day} places={0} />
    </li>
  ));

  return (
    <div>
      <Head>
        <title>AussiCamp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <ul className={styles.section}>{day}</ul>
        </main>
      </div>
    </div>
  );
}
