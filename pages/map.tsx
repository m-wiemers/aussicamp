import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import styles from "../styles/map.module.css";

const apiToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const mapStyle = "mapbox://styles/klebauter/ckm0twti53jma17o8ybvw6w2c";

export default function map() {
  const [viewport, setViewport] = useState({
    latitude: -25.346523728400882,
    longitude: 131.03621982872386,
    zoom: 10,
    width: "100vw",
    height: "100vh",
  });

  return (
    <div className={styles.map}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={apiToken}
        mapStyle={mapStyle}
        onViewportChange={(viewport) => setViewport(viewport)}
      ></ReactMapGL>
    </div>
  );
}
