import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DayDetails from "../components/dayDetails/DayDetails";
import useLocalStorage from "../hooks/useLocalStorage";
import { Day } from "../utils/types";
import styles from "./../styles/Day.module.css";

export default function Days() {
  const router = useRouter();
  const thisId = +router.asPath.match(/\d+/g);
  const [days, setDays] = useLocalStorage<Day[]>("locations", []);
  const [campsites, setCampsites] = useState(null);

  useEffect(() => {
    if (!days) {
      alert("No days at your plan");
      router.push("/map");
    } else {
      setDays(days);
    }
  }, []);

  useEffect(() => {
    if (days[thisId - 1]?.campSites) {
      setCampsites(days[thisId - 1].campSites);
    } else {
      setCampsites([]);
    }
  }, [days]);

  function handleDelete(id, campName) {
    const newDays = [...days];
    const newDay = {
      ...newDays[id],
      campSites: newDays[id].campSites.filter(
        (campsite) => !campsite.includes(campName)
      ),
    };
    newDays.splice(id, 1, newDay);
    setDays([...newDays]);
  }

  const cityName = days[thisId - 1]?.label ? days[thisId - 1].label : "No City";

  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>{`Day ${thisId}`}</h2>
      <ul className={styles.list}>
        {campsites &&
          campsites.map((camp, index) => {
            return (
              <DayDetails
                cityName={cityName}
                linkToCity={`/map?startCity=${cityName}`}
                campSiteName={camp}
                image={"/placeholderpic.jpg"}
                linkToLocation={`/map?startCity=${cityName}`}
                onDeleteClick={() => handleDelete(thisId - 1, camp)}
                key={index}
              />
            );
          })}
      </ul>
    </div>
  );
}
