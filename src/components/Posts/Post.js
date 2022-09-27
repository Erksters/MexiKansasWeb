import React from "react";
import PostData from "./Data.json";
import ReactHtmlParser from "react-html-parser";

const Post = (props) => {
  const { post_id } = props;
  const ReadPost = PostData[post_id];
  const postDate = new Date(ReadPost.date)
  const options = {  year: 'numeric', month: 'long', day: 'numeric' };
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
      <h1>{ReadPost.title}</h1>

      <div
        style={{
          maxWidth: "75vw",
          textAlign: "left",
        }}
      >
        <strong>{postDate.toLocaleString('en-US', options)}</strong>
        {ReadPost.body.map((entry, index) => (
          <p>{ReactHtmlParser(ReadPost.body[index])}</p>
        ))}
      </div>
    </div>
  );
};

export default Post;
