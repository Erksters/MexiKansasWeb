import React from "react";
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

      <div style={{ width: "80vw" }}>
        <h2>Review Popular Tweets or Read Our Posts</h2>
        <br />
        <button
          className="Simple_Button  Shadow"
          onClick={() => {
            window.location = "/#/posts";
          }}
        >
          View Posts
        </button>

        <br />
        <br />

        <iframe
          className=" Shadow"
          src="https://widgets.sociablekit.com/twitter-feed/iframe/94249"
          frameborder="0"
          width="100%"
          height="500"
        ></iframe>

        <br />
        <br />

        <iframe
          className=" Shadow"
          src="https://widgets.sociablekit.com/twitter-hashtag-feed/iframe/94228"
          frameborder="0"
          width="100%"
          height="500"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
