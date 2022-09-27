import React from "react";

const Submissions = () => {
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

      <div style={{ width: "75vw" }}>
        <h2>Contribute Your Own Post by Completing the Form Below</h2>
        <br />

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScQtTuerF33vH9X0Iu8u7qfgyhPpkmQklYc7S_n9jL3mg1w8w/viewform?embedded=true"
          width="100%"
          height="800px"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Submissions;
