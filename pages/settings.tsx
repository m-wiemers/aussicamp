import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../components/button/Button";
import SelectCity from "../components/citieSelect/SelectCity";
import DateInput from "../components/DateInput/DateInput";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./../styles/Settings.module.css";

export default function settings() {
  const [selectStartCity, setSelectStartCity] = useState("");
  const [selectLastCity, setSelectLastCity] = useState("");

  useEffect(() => {
    const lastStartValue = localStorage.getItem("StartCity");
    setSelectStartCity(lastStartValue);
    const lastLastCity = localStorage.getItem("LastCity");
    setSelectLastCity(lastLastCity);
  }, []);

  function handleStartLocationChange(event) {
    const startLocation = event.target.value;
    localStorage.setItem("StartCity", startLocation);
  }

  function handleLastLocationChange(event) {
    const lastLocation = event.target.value;
    localStorage.setItem("LastCity", lastLocation);
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
          value={""}
          onDateSelect={() => <p></p>}
        />
        <DateInput label={"End date"} value={""} onDateSelect={() => <p></p>} />
      </main>
      <div className={styles.button}>
        <Button label={"continue"} onButtonClick={() => <p></p>} />
      </div>
      <footer className={styles.footer}>
        <Footer activeButton={"settings"} />
      </footer>
    </div>
  );
}
