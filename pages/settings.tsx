import Head from "next/head";
import { useState } from "react";
import Button from "../components/button/Button";
import SelectCity from "../components/citieSelect/SelectCity";
import DateInput from "../components/DateInput/DateInput";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./../styles/Settings.module.css";

export default function settings() {
  function handleStartLocationChange(event) {
    localStorage.setItem("StartCity", event.target.value);
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
          label={"start location"}
          value={bigCities}
          onSelect={handleStartLocationChange}
        />

        <SelectCity
          label={"end location"}
          value={bigCities}
          onSelect={() => <p></p>}
        />

        <DateInput
          label={"start date"}
          value={"2020-04-01"}
          onDateSelect={() => <p></p>}
        />

        <DateInput
          label={"end date"}
          value={"2021-04-01"}
          onDateSelect={() => <p></p>}
        />

        <div>
          <Button label={"continue"} onButtonClick={() => <p></p>} />
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer isActive={"settings"} />
      </footer>
    </div>
  );
}
