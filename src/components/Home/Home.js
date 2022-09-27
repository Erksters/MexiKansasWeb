import React, { useEffect, useState } from "react";
// import { show_recent_100} from "../api";
import Loading from "../Loading/Loading";
import { Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
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
        <h3>Review Popular Tweets or Read Our Posts</h3>
        <Button
          style={{
            width: "100%",
            background: "#000",
            border: "solid",
            fontSize: "large",
          }}
        >
          View Posts
        </Button>

        <br />
        <br />

        <h3>Review Latinx Tweets</h3>
        <iframe
          src="https://widgets.sociablekit.com/twitter-hashtag-feed/iframe/94228"
          frameborder="0"
          width="100%"
          height="500"
        ></iframe>
        <br />
        <br />

        <iframe
          src="https://widgets.sociablekit.com/twitter-feed/iframe/94249"
          frameborder="0"
          width="100%"
          height="500"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
