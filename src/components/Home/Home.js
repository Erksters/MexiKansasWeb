import React, { useEffect, useState } from "react";
import { show_recent_100, ping_home, search_redirect } from "../api";
import Loading from "../Loading/Loading";
import "./Home.css";

const Home = () => {
  const [showRecent100, setShowRecent100] = useState(undefined);

  useEffect(() => {
    fetch(show_recent_100)
      .then((response) => response.json())
      .then((data) => {
        setShowRecent100(data);
      });

    fetch(ping_home);
  }, []);

  if (showRecent100 === undefined) {
    console.log("loading...");
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <br />

      <div style={{ maxWidth: "75vw" }}>
        <h3>Crytpo Scam Prevention and Official Regulation Compendium.</h3>

        <br />
        <br />
        <p>Recently Registered Sketchy Wallets to Avoid When Trading Online</p>
      </div>
    </div>
  );
};

export default Home;
