import React, { useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import styles from "../styles/Map.module.css";
import { Campsite, getCampSites } from "../utils/api";
import CampMarkerIcon from "../components/icons/CampMarkerIcon";
import PopupSelect from "../components/popupselect/PopupSelect";
import useLocalStorage from "../hooks/useLocalStorage";
import { useRouter } from "next/router";
import { Day } from "../utils/types";

const apiToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const apiKey = process.env.OTM_API_KEY;
const mapStyle = "mapbox://styles/klebauter/ckm0twti53jma17o8ybvw6w2c";

type coordinates = {
  name: string;
  lat: number;
  lon: number;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { startCity } = context.query;
  const res = await fetch(
    `https://api.opentripmap.com/0.1/en/places/geoname?name=${startCity}&country=au&apikey=${apiKey}&=startCity=${startCity}`
  );
  const startCoordinates: coordinates = await res.json();
  const latitude = startCoordinates.lat ?? -33.865143;
  const longitude = startCoordinates.lon ?? 151.2099;
  return { props: { latitude, longitude } };
};

export default function map({
  latitude,
  longitude,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [indexFromSelectedDay, setIndexFromSelectDay] = useState<number>(0);
  const [storedDays, setStoredDays] = useLocalStorage<Day[]>("locations", []);
  const [campsites, setCampsites] = useState<Campsite[]>([]);
  const [selectedCampSite, setSelectedCampSite] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 10,
    width: "100vw",
    height: "83vh",
  });

  useEffect(() => {
    if (!storedDays) {
      alert("Sorry, No Days at your plan");
      router.push("/settings");
    } else {
      setStoredDays(storedDays);
    }
  }, []);

  useEffect(() => {
    getCampSites().then(setCampsites);
  }, []);

  if (!campsites) {
    return <div>Loading...</div>;
  }

  function handleIconClick(camp) {
    setSelectedCampSite(camp);
  }

  function handleDaySelect(e) {
    const idFromSelect = e.target.value;
    setIndexFromSelectDay(idFromSelect - 1);
  }

  function handleAddButton(e) {
    e.preventDefault();
    storedDays[indexFromSelectedDay].campSites.push(selectedCampSite.name);
    setStoredDays(storedDays);
  }

  const campsiteMarker = campsites.map((camp, index) => (
    <Marker
      key={index}
      className={styles.marker}
      longitude={camp.lon}
      latitude={camp.lat}
    >
      <p className={styles.markerButton} onClick={() => handleIconClick(camp)}>
        <CampMarkerIcon />
      </p>
    </Marker>
  ));

  return (
    <div className={styles.map}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={apiToken}
        mapStyle={mapStyle}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <div>{campsiteMarker}</div>
        {selectedCampSite && (
          <Popup
            className={styles.popup}
            latitude={selectedCampSite.lat}
            longitude={selectedCampSite.lon}
            onClose={() => setSelectedCampSite(null)}
            closeOnClick={false}
          >
            <div>
              <h2 className={styles.popupCampname}>{selectedCampSite.name}</h2>
              <p className={styles.popupRate}>Rate: {selectedCampSite.rate}</p>
            </div>
            <PopupSelect
              buttonLabel="Add Campsite"
              onChange={handleDaySelect}
              label="Add this Campsite to"
              days={storedDays}
              handleSubmit={handleAddButton}
            />
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}
