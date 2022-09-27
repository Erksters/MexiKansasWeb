import React, { useState, useEffect } from "react";
import MapSEO from "../SEO/MapSEO";
import "./styles.css";

const Map = (props) => {
  const params = new URLSearchParams(window.location.hash.substring(5));
  const countryName = params.get("country");
  return(<></>
  );
};

export default Map;
