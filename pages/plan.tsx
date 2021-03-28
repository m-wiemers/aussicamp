import { useEffect, useState } from "react";
import PlanDetails from "../components/planDetails/PlanDetails";
import styles from "../styles/Plan.module.css";

export default function Plan() {
  const [cities, setDays] = useState([]);

  useEffect(() => {
    const daysOfLS = localStorage.getItem("locations");
    if (daysOfLS === null) {
      window.alert("no days at your plan!");
      window.history.back();
    } else {
      setDays(JSON.parse(daysOfLS));
    }
  }, []);

  const city = cities.map((city, index) => (
    <li key={index} className={styles.list}>
      <PlanDetails
        label={index + 1}
        cityName={city}
        link={"day".concat(index.toString())}
        places={0}
      />
    </li>
  ));

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ul className={styles.section}>{city}</ul>
      </main>
    </div>
  );
}
