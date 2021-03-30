import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import AussiTentIcon from "../components/icons/AussiTentIcon";
import styles from "../styles/Map.module.css";
import { Campsite, getCampSites } from "../utils/api";

const apiToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const mapStyle = "mapbox://styles/klebauter/ckm0twti53jma17o8ybvw6w2c";

export default function map() {
  const [campsites, setCampsites] = useState<Campsite[]>([]);
  const [viewport, setViewport] = useState({
    latitude: -25.346523728400882,
    longitude: 131.03621982872386,
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

  const campsite = campsites.map((campsite) => (
    <Marker
      key={campsite.name}
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
