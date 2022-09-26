import React from "react";
import PostData from "./Data.json";

const Post = (props) => {
  const { post_id } = props;
  const ReadPost = PostData[post_id];

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
      <p>{ReadPost.title}</p>

      {ReadPost.body.map((entry, index) => (
        <p>{ReadPost.body[index]}</p>
      ))}
      
    </div>
  );
};

export default Post;
