import React from "react";

const About = () => {
  return (
    <div
      className="Center_Content"
      style={{
        flexDirection: "column",
        alignItems: "center",
        textAlign: "left",
      }}
    >
      <div style={{ maxWidth: "75vw" }}>
        <br />
        <h2 style={{ textAlign: "center" }}>
          About MexiKansas.com and Its Authors
        </h2>
        <br />
        <p>
          MexiKansas.com is a website dedicated to help Chicanos and others
          understand, resolve, and improve personal struggles via storytelling.
          Many Chicano's have similar experiences and can benefit from reading
          case-by-case scenarios. The author is from the midwest and has shared
          a few stories anonymously. If you'd like to contribute and add a
          personal experience to this website, then email{" "}
          <a href="emailto:mexikansas1@gmail.com">mexikansas1@gmail.com</a> or
          contribute via Google Forms. He is currently working on many different
          projects amongst web, mobile, and software development but would
          appreciate your interest.
        </p>

        <p>
          Some topics that we want to highlight in this site will include, but
          is not limited to:
          <ul>
            <li className="Topics">
              Higher-Education as a First-Generation Student
            </li>
            <li className="Topics">Limited Cultural Ties</li>
            <li className="Topics">Food and Diet</li>
            <li className="Topics">Therapy Engagement</li>
            <li className="Topics">Relationships with Peers</li>
            <li className="Topics">International Identity</li>
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
