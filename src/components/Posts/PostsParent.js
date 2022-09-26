import React, { useEffect } from "react";
import PostData from "./Data.json";
import PostCard from "./PostCard";

const PostsParent = () => {
  console.log(Object.entries(PostData));

  return (
    <div
      data-mid="outer"
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        // textAlign: "center",
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
