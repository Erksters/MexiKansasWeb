import React from "react";

const References = () => {
  return (
    <div
      className="Center_Content"
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "80vw", textAlign: "left" }}>
        <br />
        <h2 style={{ textAlign: "center" }}>Where We Find Information</h2>
        <br />
        <p>
          Many of our stories come from anonymous submissions or the original
          author of this website. We don't ask story-tellers to give their names
          as sometime their tales are embarrassing.
        </p>

        <p>
          Additionally, some posts could derive their inspiration from other
          stories. We try to keep posts as original as possible
        </p>

        <p>
          We recommend that you take an interest in Latinx role models off
          twitter, reddit, or other forms of social media. They have spent more
          time in this atmosphere and could provide better insight and community
          for your struggles.
        </p>
      </div>
    </div>
  );
};

export default References;
