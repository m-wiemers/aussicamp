import { useRouter } from "next/router";
import { useEffect } from "react";
import DayDetails from "../components/dayDetails/DayDetails";
import useLocalStorage from "../hooks/useLocalStorage";
import { Day } from "../utils/types";
import styles from "./../styles/Day.module.css";

export default function Days() {
  const router = useRouter();
  const thisId = +router.asPath.match(/\d+/g);
  const [days, setDays] = useLocalStorage<Day[]>("locations", []);

  useEffect(() => {
    if (!days) {
      alert("No campsites for this day found...");
      router.push("/map");
    } else {
      setDays(days);
    }
  }, []);

  function handleDelete(e) {
    e.preventDefault();
    console.log("button clicked");
  }

  const campsites = days[thisId - 1].campSites;
  const cityName = days[thisId - 1].label;
  const campsiteDetails = campsites.map((camp, index) => {
    return (
      <DayDetails
        cityName={cityName}
        campSiteName={camp}
        image={"/placeholderpic.jpg"}
        linkToLocation={"/map"}
        onDeleteClick={handleDelete}
        key={index}
      />
    );
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>{`Day ${thisId}`}</h2>
      <ul className={styles.list}>{campsiteDetails}</ul>
    </div>
  );
}
