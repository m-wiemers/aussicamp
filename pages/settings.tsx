import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../components/button/Button";
import SelectCity from "../components/citieSelect/SelectCity";
import DateInput from "../components/DateInput/DateInput";
import DayCounter from "../components/dayCounter/DayCounter";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./../styles/Settings.module.css";

export default function settings() {
  const [selectStartCity, setSelectStartCity] = useState("");
  const [selectLastCity, setSelectLastCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [lastDate, setLastDate] = useState("");

  useEffect(() => {
    const preStartValue = localStorage.getItem("StartCity");
    setSelectStartCity(preStartValue);
    const preLastCity = localStorage.getItem("LastCity");
    setSelectLastCity(preLastCity);
  }, []);

  useEffect(() => {
    const preStartDate = localStorage.getItem("StartDate");
    setStartDate(preStartDate);
    const preLastDate = localStorage.getItem("LastDate");
    setLastDate(preLastDate);
  }, []);

  function handleStartLocationChange(event) {
    const startLocation = event.target.value;
    localStorage.setItem("StartCity", startLocation);
    setSelectStartCity(startLocation);
  }

  function handleLastLocationChange(event) {
    const lastLocation = event.target.value;
    localStorage.setItem("LastCity", lastLocation);
    setSelectLastCity(lastLocation);
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
    <div className={styles.container}>
      <Head>
        <title>AussCamp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

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
        <DayCounter
          label="Your plan has"
          lastDate={lastDate}
          startDate={startDate}
          secondLabel="days"
        />
      </main>
      <div className={styles.button}>
        <Button label={"continue"} link="#" />
      </div>
      <footer className={styles.footer}>
        <Footer activeButton={"settings"} />
      </footer>
    </div>
  );
}
