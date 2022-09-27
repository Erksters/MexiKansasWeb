import React from "react";
import NavigationBar from "../NavigationBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div id="Header" style={{ display: "block" }}>
      <div
        id="Title"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ display: "none" }}>Welcome to MexiKansas</h1>
        <h1 style={{ fontSize: "xx-large" }}>MexiKansas</h1>
      </div>

      <div
        id="Title"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "x-large" }}>The Chicano Experience</p>
      </div>

      <div
        id="NavBar"
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#F8F9FA",
        }}
      >
        <NavigationBar />
      </div>
    </div>
  );
};

export default Header;
