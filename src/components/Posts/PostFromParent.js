import React from "react";
import PostData from "./Data.json";
import ReactHtmlParser from "react-html-parser";

const PostFromParent = (props) => {
  const { post_id } = props;
  const ReadPost = PostData[post_id];

  return (
    <>
      <br />
      <br />

      <h1 style={{ textAlign: "center" }}>{ReadPost.title}</h1>
      <br />
      <div
        style={{
          textAlign: "left",
        }}
      >
        <strong>{ReadPost.date}</strong>
        {ReadPost.body.map((entry, index) => (
          <p>{ReactHtmlParser(ReadPost.body[index])}</p>
        ))}
      </div>
    </>
  );
};

export default PostFromParent;
