import React from "react";
import Loading from "../Loading/Loading";
import { Timeline } from "react-twitter-widgets";
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

        <Timeline
          className="Shadow"
          renderError={() => {
            return (
              <>
                Try Refreshing the page
                <Loading />{" "}
              </>
            );
          }}
          dataSource={{ sourceType: "profile", screenName: "DoloresHuertaFD" }}
        />
      </div>
    </div>
  );
};

export default Home;
