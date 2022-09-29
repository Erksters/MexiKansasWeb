import React, { useState } from "react";
import PostData from "./Data.json";
import PostCard from "./PostCard";
import PostFromParent from "./PostFromParent";

const PostsParent = () => {
  const [post_id, set_post_id] = useState(undefined);
  const [search_post_id, set_search_post_id] = useState("");

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

  const filterCard = (post_title) => {
    if (
      post_title.toUpperCase().indexOf(`${search_post_id.toUpperCase()}`) > -1
    ) {
      return true;
    } else {
      return false;
    }
  };

  //If we arrived here naturally and not from link
  //Show cards
  if (post_id === undefined) {
    return (
      <div
        className="Center_Content"
        style={{
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <br />
          <h2>Select An Article to Get Started</h2>

          <input
            className="SearchBar"
            type="text"
            placeholder="Search for a Post by Title"
            value={search_post_id}
            label="Search by Title"
            onChange={(e) => {
              set_search_post_id(e.target.value);
            }}
          />

          <div className="Post_Card_Arrangement">
            {Object.keys(PostData).map((entry, index) => (
              <div className="Post_Cards_Display">
                {filterCard(PostData[entry].title) ? (
                  <PostCard
                    key={index}
                    post_id={index}
                    title={PostData[entry].title}
                    teaser={PostData[entry].teaser}
                    imageArray={PostData[entry].images}
                    set_post_id={set_post_id}
                  />
                ) : (
                  <></>
                )}
              </div>
            ))}

            <button
              className="Simple_Button Shadow"
              onClick={() => {
                window.location = "/#/submissions";
              }}
            >
              Write an Article
            </button>
          </div>
        </div>
      </div>
    );
  }
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
      <div
        style={{
          width: "80vw",
          textAlign: "left",
        }}
      >
        <br />
        <button
          className="Simple_Button  Shadow"
          onClick={() => {
            set_post_id(undefined);
          }}
        >
          Return
        </button>

        <PostFromParent post_id={post_id} />
        <button
          className="Simple_Button  Shadow"
          onClick={() => {
            set_post_id(undefined);
          }}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default PostsParent;
