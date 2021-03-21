import Head from "next/head";
import SelectCity from "../components/citieSelect/SelectCity";
import DateInput from "../components/DateInput/DateInput";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./../styles/Settings.module.css";

export default function settings() {
  const bigCities = ["Sydney", "Brisbane", "Perth"];
  return (
    <div className={styles.container}>
      <Head>
        <title>AussCamp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.settings}>
        <div>
          <SelectCity
            label={"start location"}
            value={bigCities}
            onSelect={() => <p></p>}
          />
        </div>
        <div>
          <SelectCity
            label={"end location"}
            value={bigCities}
            onSelect={() => <p></p>}
          />
          <div>
            <DateInput
              label={"start date"}
              value={"2020-04-01"}
              onDateSelect={() => <p></p>}
            />
          </div>
          <div>
            <DateInput
              label={"end date"}
              value={"2021-04-01"}
              onDateSelect={() => <p></p>}
            />
          </div>
        </div>
      </main>
      <Footer isActive={"settings"} />
    </div>
  );
}
