import React from "react";

const MapSEO = (props) => {
  const { nation } = props;

  console.log("map seo", props, nation);

  return (
    <div>
      {/* INVISIBLE */}
      <h1 style={{ display: "none" }}>{nation} Cryptocurrency Regulations</h1>
      <h1 style={{ display: "none" }}>{nation} Cryptocurrency Legislation</h1>
      <h1 style={{ display: "none" }}>{nation} Cryptocurrency Laws</h1>
      <h1 style={{ display: "none" }}>
        {nation} Crypto Currencies Rules Regulations Laws
      </h1>
      <h1 style={{ display: "none" }}>{nation} Crypto Currencies Approach </h1>
      <h1 style={{ display: "none" }}>{nation} Crypto Currencies Stance</h1>
    </div>
  );
};

export default MapSEO;
