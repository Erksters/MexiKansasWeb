import React from "react";
import PostData from "./Data.json";
import Post from "./Post";
import PostCard from "./PostCard";

const PostsParent = () => {
  const params = new URLSearchParams(new URL(window.location.href).search);
  const post_id = params.get("id") || null;
  console.log(params.get("id"));
  console.log(params.values);

  if (post_id !== null) {
    return (
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "center",
        }}
      >
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
