import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PlanDetails from "../components/planDetails/PlanDetails";
import styles from "../styles/Plan.module.css";

export default function Plan() {
  const router = useRouter();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const daysOfLS = localStorage.getItem("locations");
    if (daysOfLS === null) {
      window.alert("no days at your plan!");
      router.back();
    } else {
      setCities(JSON.parse(daysOfLS));
    }
  }, []);

  const cityDetails = cities.map((city: string, index: number) => (
    <li key={index} className={styles.list}>
      <PlanDetails
        label={index + 1}
        cityName={city}
        linkToDay={`day${index + 1}`}
        linkToCity={`/map?startCity=${city}`}
        places={0}
      />
    </li>
  ));

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ul className={styles.section}>{cityDetails}</ul>
      </main>
    </div>
  );
}
