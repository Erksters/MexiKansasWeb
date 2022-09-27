import React from "react";
import PostData from "./Data.json";
import Post from "./Post";
import PostCard from "./PostCard";

const PostsParent = () => {
  const params = new URLSearchParams(window.location.hash.substring(7));
  const post_id = params.get("id") || null;

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
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <div
        data-mid="mid"
        style={{
          display: "flex",
          maxWidth: "75vw",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <br />

        {Object.keys(PostData).map((entry, index) => (
          <div style={{ margin: "20px" }}>
            <PostCard
              key={index}
              post_id={index}
              title={PostData[entry].title}
              teaser={PostData[entry].teaser}
              imageArray={PostData[entry].images}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsParent;
