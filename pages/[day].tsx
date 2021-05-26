import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DayDetails from "../components/dayDetails/DayDetails";
import DayDetailHead from "../components/dayDetailshead/DayDetailHead";
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
      router.push("/settings");
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
  }, [days, thisId]);

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
      <header className={styles.header}>
        <DayDetailHead
          day={`Day ${thisId}`}
          nextPage={thisId < days.length ? `/day${thisId + 1}` : "day1"}
          prePage={thisId > 1 ? `day${thisId - 1}` : `day${days.length}`}
        />
      </header>
      <ul className={styles.list}>
        {campsites &&
          campsites.map((camp: string) => {
            return (
              <DayDetails
                cityName={cityName}
                linkToCity={`/map?startCity=${cityName}`}
                campSiteName={camp}
                image={"/placeholderpic.jpg"}
                linkToLocation={`/map?startCity=${cityName}`}
                onDeleteClick={() => handleDelete(thisId - 1, camp)}
                key={camp}
              />
            );
          })}
      </ul>
    </div>
  );
}
