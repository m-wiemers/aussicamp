import { useEffect, useState } from "react";
import SelectCity from "../components/citieSelect/SelectCity";
import DateInput from "../components/DateInput/DateInput";
import DayCounter from "../components/dayCounter/DayCounter";
import MainButton from "../components/clickButton/ClickButton";
import styles from "./../styles/Settings.module.css";
import DayCount from "../utils/dayCount";
import { useRouter } from "next/router";
import useLocalStorage from "../hooks/useLocalStorage";

export default function settings() {
  const router = useRouter();
  const [days, setDays] = useState<number>(null);
  const [startDate, setStartDate] = useLocalStorage<string>("StartDate", "");
  const [lastDate, setLastDate] = useLocalStorage<string>("LastDate", "");
  const [startCity, setStartCity] = useLocalStorage<string>(
    "StartCity",
    "Sydney"
  );
  const [lastCity, setLastCity] = useLocalStorage<string>("LastCity", "Sydney");
  const [locations, setLocations] = useLocalStorage<string[]>("locations", []);

  useEffect(() => {
    const days = DayCount(startDate, lastDate);
    if (!days) {
      return;
    } else {
      setDays(Math.round(days));
    }
  }, [startDate, lastDate]);

  function handleStartLocationChange(event) {
    const startLocation = event.target.value;
    setStartCity(startLocation);
  }

  function handleLastLocationChange(event) {
    const lastLocation = event.target.value;
    setLastCity(lastLocation);
  }

  function handleStartDateChange(event) {
    const startDate = event.target.value;
    setStartDate(startDate);
  }

  function handleLastDateChange(event) {
    const lastDate = event.target.value;
    setLastDate(lastDate);
  }

  async function handleButtonClick() {
    function addCitysToArray(arr: string[]) {
      arr[0] = startCity;
      arr.push(lastCity);
      return arr;
    }

    if (days < 1) {
      alert("The end date must be after the start date!");
      return;
    }
    if (days === undefined) {
      alert("Please select start- and end Date first!");
      return;
    }

    const arr = new Array(days - 1).fill("no City");
    const array = addCitysToArray(arr);
    setLocations(array);

    if (locations.length < days) {
      const daysPlusDays = locations.length + days;
      const arr = Array(daysPlusDays - locations.length - 1).fill("no City");
      const array = addCitysToArray(arr);
      setLocations(array);
    }
    if (locations.length > days) {
      if (
        confirm(
          "Your original plan was longer. We are creating a new plan now. Your old plan will be deleted!"
        )
      ) {
        const arr = Array(days - 1).fill("no City");
        const array = addCitysToArray(arr);
        setLocations(array);
      }
    }
    router.push("/plan");
  }

  const bigCities = [
    "Adelaide",
    "Alice Springs",
    "Brisbane",
    "Cairns",
    "Canberra",
    "Darwin",
    "Hobart",
    "Melbourne",
    "Perth",
    "Sydney",
  ];

  return (
    <>
      <main className={styles.main}>
        <SelectCity
          label={"Start location"}
          selected={startCity}
          value={bigCities}
          onSelect={handleStartLocationChange}
        />
        <SelectCity
          label={"End location"}
          selected={lastCity}
          value={bigCities}
          onSelect={handleLastLocationChange}
        />
        <DateInput
          label={"Start date"}
          value={startDate}
          onDateSelect={handleStartDateChange}
        />
        <DateInput
          label={"End date"}
          value={lastDate}
          onDateSelect={handleLastDateChange}
        />
        {days && !isNaN(days) && (
          <DayCounter label="Your plan has" days={days} secondLabel="days" />
        )}
      </main>
      <div className={styles.button}>
        <MainButton onClick={handleButtonClick} label={"continue"} />
      </div>
    </>
  );
}
