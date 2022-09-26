import React, { useState, useEffect } from "react";
import MapData from "./MapData.json";
import "./styles.css";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import { ping_map } from "../api";
import MapSEO from "../SEO/MapSEO";

const Map = (props) => {
  const params = new URLSearchParams(window.location.hash.substring(5));
  const countryName = params.get("country");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(ping_map);
  }, []);

  if (countryName === null) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "75vw",
          }}
        >
          <h2>Crypto Regulations by Nation </h2>
          <h3>Select a Country to Learn More</h3>
          <div className="map-wrapper">
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </div>
        </div>
      </div>
    );
  }

  console.log(MapData[countryName]);
  console.log(countryName);
  return (
    <div
      data-cy="Table_Data_By_Nation"
      style={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <MapSEO nation={countryName} />
      <div style={{ maxWidth: "75vw" }}>
        <h2>Current Data on {countryName}'s Digital Asset Regulations</h2>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>{countryName}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Legal:</td>
              <td>{MapData[countryName].Legal.toString()}</td>
            </tr>

            <tr>
              <td>Notes:</td>
              <td>{MapData[countryName].Notes}</td>
            </tr>

            <tr>
              <td>References:</td>
              <td>
                {MapData[countryName].Sources.map((item, index) => (
                  <>
                    <a href={`${item}`}>
                      {MapData[countryName].SourceName[index]}
                    </a>
                    <br />
                  </>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Map;
