import React, { useEffect } from "react";
// import { ping_about } from "../api";

const About = () => {
  useEffect(() => {
    // fetch(ping_about);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "left",
      }}
    >
      <br/>
          <h2>About MexiKansas.com and Its Authors</h2>
          <br />
      
      <div style={{ maxWidth: "75vw" }}>
        <br />
        

        <p>
          MexiKansas.com is a website dedicated to help Chicanos understand and
          resolve personal struggles via storytelling. The author is from the
          midwest and does not represent all Latinos in the country. If you'd
          like to contribute and add a personal experience to this website email{" "}
          <a href="emailto:mexikansas1@gmail.com">mexikansas1@gmail.com</a>. He
          is currently working on many different projects amongst web, mobile,
          and software development but would appreciate your interest.
        </p>

        <p>
          Some topics that we want to highlight in this site will include, but
          is not limited to: First generational student, Therapy, Food, Cultural
          Ties, National Relationships, and Relationships amonsts peers.
          <ul>

          
          <li className="Topics">First-Generation Students</li>
          <li className="Topics">Cultural Ties</li>
          <li className="Topics">Food and Diet</li>
          <li className="Topics">Therapy</li>
          <li className="Topics">Relationships with Peers</li>
          <li className="Topics">National Relationships</li>
          </ul>
        </p>

        <p>
          While this site is still in it's early stages, please be patient if
          you see a lack of information. We try to provide a reliable
          information on current, previous, and future issues for the community.
        </p>
      </div>
    </div>
  );
};

export default About;
