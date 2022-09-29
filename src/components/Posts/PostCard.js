import React from "react";

const PostCard = (props) => {
  const { title, imageArray, teaser, post_id, set_post_id } = props;

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

  const DeliverPost = () => {
    window.scrollTo(0, 0);
    set_post_id(post_id);
  };

  return (
    <>
      <div
        className="Card Shadow"
        id={`${post_id}_button_to_read_post`}
        data-cy={`Card_${post_id}`}
      >
        <div
          id={`${post_id}_title_link_to_read_post`}
          data-cy={`Card__title_link_${post_id}`}
          className="Card_Title"
          onClick={() => {
            DeliverPost();
          }}
        >
          {title}
        </div>

        <div
          className="Card_Img_a_Tag_Parent"
          id={`${post_id}_Img_to_read_post`}
          data-cy={`Card_Img${post_id}`}
          onClick={() => {
            DeliverPost();
          }}
        >
          <img
            className="Card_Img"
            variant="top"
            src={denseArrayImages[imageArray[0]]}
          />
        </div>

        <div className="Card_Body">
          <div>{teaser.substring(0, 100)}...</div>
        </div>

        <div
          id={`${post_id}_Card_Button_to_read_post`}
          data-cy={`Card_Button_${post_id}`}
          className="Card_Button"
          onClick={() => {
            DeliverPost();
          }}
        >
          Read More
        </div>
      </div>
    </>
  );
};

export default PostCard;
