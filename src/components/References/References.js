import React from "react";
import { Reuters_Download } from "../api";

const References = () => {
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
      <div style={{ maxWidth: "75vw" }}>
        <p>
          Many of our sources come from official government websites. Since our
          researchers are not able to read every language, we had to rely on
          translating services such as Google translate to have an idea as to
          what the contents of the websites say.
        </p>

        <p>
          As we searched for accurate information, some of it may have been
          updated since the last time it was under review. Additionally, some
          countries are not as advanced with their financial systems and have no
          legislation or regulations yet, but that may change in the near future
          as digital assets become more popular with the general public.
        </p>

        <p>
          It is a good idea to look for resources independently. One resource
          that we took into heavy consideration was the{" "}
          <a href={Reuters_Download}>
            Compendium: Cryptocurrency Regulations by Country By Thomas Reuters
            2022
          </a>
          . Additionally, we looked at{" "}
          <a href="https://freemanlaw.com/cryptocurrency/">FremanLaw</a> and
          many other online journals to understand the state of crypto
          respectively.
        </p>
      </div>
    </div>
  );
};

export default References;
