import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PlanDetails from "../components/planDetails/PlanDetails";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "../styles/Plan.module.css";
import { Day } from "../utils/types";

export default function Plan() {
  const router = useRouter();
  const [cities, setCities] = useLocalStorage<Day[]>("locations", []);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (cities === null) {
      window.alert("no days at your plan!");
      router.back();
    } else {
      setCities(cities);
    }
  }, [cities]);

  function handleCityChange(preCityName, id) {
    const newCities = [...cities];
    const newCity = {
      ...newCities[id],
      label: preCityName.replace(preCityName, inputValue),
    };
    newCities.splice(id, 1, newCity);
    setCities(newCities);
  }

  const cityDetails = cities.map((city) => (
    <li key={city.id} className={styles.list}>
      <PlanDetails
        label={city.id}
        cityName={city.label}
        linkToDay={`day${city.id}`}
        linkToCity={`/map?startCity=${city.label}`}
        places={city.campSites.length}
        handleChange={() => handleCityChange(city.label, city.id - 1)}
        inputChange={(e) => setInputValue(e.target.value)}
        placeHolder={city.label}
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
