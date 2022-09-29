import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Submissions = () => {
  const [captcha, setCaptcha] = useState(true);

  const HandleSubmit = () => {
    setCaptcha(false);
  };

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

      <div style={{ width: "80vw" }}>
        <h2>Contribute Your Own Post by Completing the Form Below</h2>
        <br />
        {captcha ? (
          <div
            id="help"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>But First Let's Make Sure You're Human</h3>
            <br />
            <ReCAPTCHA
              sitekey="6LdpaD8iAAAAABgYGY47B2mE7EvrFWda5TGfonFZ"
              onChange={HandleSubmit}
            />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Submissions;
