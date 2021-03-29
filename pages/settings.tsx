import { useEffect, useState } from "react";
import SelectCity from "../components/citieSelect/SelectCity";
import DateInput from "../components/DateInput/DateInput";
import DayCounter from "../components/dayCounter/DayCounter";
import MainButton from "../components/mainButton/MainButton";
import styles from "./../styles/Settings.module.css";
import DayCount from "../utils/dayCount";

export default function settings() {
  const [selectStartCity, setSelectStartCity] = useState("");
  const [selectLastCity, setSelectLastCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [days, setDays] = useState(null);

  useEffect(() => {
    const days = DayCount(startDate, lastDate);
    setDays(days);
  }, [startDate, lastDate]);

  useEffect(() => {
    const preStartValue = localStorage.getItem("StartCity");
    if (!preStartValue) {
      localStorage.setItem("StartCity", "Sydney");
    }
    setSelectStartCity(preStartValue);
    const preStartDate = localStorage.getItem("StartDate");
    setStartDate(preStartDate);
    const preLastCity = localStorage.getItem("LastCity");
    if (!preLastCity) {
      localStorage.setItem("LastCity", "Sydney");
    }
    setSelectLastCity(preLastCity);
    const preLastDate = localStorage.getItem("LastDate");
    setLastDate(preLastDate);
  }, []);

  function handleStartLocationChange(event) {
    const startLocation = event.target.value;
    localStorage.setItem("StartCity", startLocation);
    setSelectStartCity(startLocation);
    if (!JSON.parse(localStorage.getItem("locations"))) {
      return;
    } else {
      const firstLocation = JSON.parse(localStorage.getItem("locations"));
      firstLocation.splice(0, 1, startLocation);
      localStorage.setItem("locations", JSON.stringify(firstLocation));
    }
  }

  function handleLastLocationChange(event) {
    const lastLocation = event.target.value;
    localStorage.setItem("LastCity", lastLocation);
    setSelectLastCity(lastLocation);
    if (!JSON.parse(localStorage.getItem("locations"))) {
      return;
    } else {
      const preLastLocation = JSON.parse(localStorage.getItem("locations"));
      preLastLocation.splice(-1, 1, lastLocation);
      localStorage.setItem("locations", JSON.stringify(preLastLocation));
    }
  }

  function handleStartDateChange(event) {
    const startDate = event.target.value;
    localStorage.setItem("StartDate", startDate);
    setStartDate(startDate);
  }

  function handleLastDateChange(event) {
    const lastDate = event.target.value;
    localStorage.setItem("LastDate", lastDate);
    setLastDate(lastDate);
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
          selected={selectStartCity}
          value={bigCities}
          onSelect={handleStartLocationChange}
        />
        <SelectCity
          label={"End location"}
          selected={selectLastCity}
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
        {days && (
          <DayCounter label="Your plan has" days={days} secondLabel="days" />
        )}
      </main>
      <div className={styles.button}>
        <MainButton
          days={days}
          label={"continue"}
          startCity={selectStartCity}
          endCity={selectLastCity}
          link="/plan"
        />
      </div>
    </>
  );
}
