import React, { useState } from "react";
import PostData from "./Data.json";
import Post from "./Post";
import PostCard from "./PostCard";
import { Button } from "react-bootstrap";

const PostsParent = () => {
  const params = new URLSearchParams(window.location.hash.substring(7));
  const post_id = params.get("id") || null;
  const [ShowSubmission, setShowSubmission] = useState(false);

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const denseArrayImages = importAll(
    require.context("./Images", false, /\.(png|jpe?g|svg)$/)
  );

  if (post_id !== null) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <img
          style={{ width: "400px", maxWidth: "75vw" }}
          src={`${denseArrayImages[PostData[post_id].images[0]]}`}
        />
        <br />

        <Post post_id={post_id} />
        <button
          className="Simple_Button"
          onClick={() => {
            window.location = "/#/submissions";
          }}
        >
          Start a Submission
        </button>
      </div>
    );
  }

  return (
    <div
      className="Center_Content"
      style={{
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <br />
      <h2>Select An Article to Get Started</h2>

      <div className="Post_Card_Arrangement">
        {Object.keys(PostData).map((entry, index) => (
          <div className="Post_Cards_Display">
            <PostCard
              key={index}
              post_id={index}
              title={PostData[entry].title}
              teaser={PostData[entry].teaser}
              imageArray={PostData[entry].images}
            />
          </div>
        ))}

        <button
          className="Simple_Button"
          onClick={() => {
            window.location = "/#/submissions";
          }}
        >
          Start a Submission
        </button>
      </div>
    </div>
  );
};

export default PostsParent;
