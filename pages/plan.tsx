import { useRouter } from "next/router";
import { useEffect } from "react";
import PlanDetails from "../components/planDetails/PlanDetails";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "../styles/Plan.module.css";

export default function Plan() {
  const router = useRouter();
  const [cities, setCities] = useLocalStorage("locations", []);

  useEffect(() => {
    if (cities === null) {
      window.alert("no days at your plan!");
      router.back();
    } else {
      setCities(cities);
    }
  }, []);

  const cityDetails = cities.map((city) => (
    <li key={city.id} className={styles.list}>
      <PlanDetails
        label={city.id}
        cityName={city.label}
        linkToDay={`day${city.id}`}
        linkToCity={`/map?startCity=${city.label}`}
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
