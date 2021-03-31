import React, { useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import ReactMapGL, { Marker } from "react-map-gl";
import styles from "../styles/Map.module.css";
import { Campsite, getCampSites } from "../utils/api";

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
  const latitude = startCoordinates.lat;
  const longitude = startCoordinates.lon;
  return { props: { latitude, longitude } };
};

export default function map({
  latitude,
  longitude,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [campsites, setCampsites] = useState<Campsite[]>([]);
  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 10,
    width: "100vw",
    height: "83vh",
  });

  useEffect(() => {
    getCampSites().then(setCampsites);
  }, []);

  if (!campsites) {
    return <div>Loading...</div>;
  }

  const campsite = campsites.map((campsite, index) => (
    <Marker
      key={index}
      className={styles.marker}
      longitude={campsite.lon}
      latitude={campsite.lat}
    >
      <div>🛌</div>
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
        <div>{campsite}</div>
      </ReactMapGL>
    </div>
  );
}
