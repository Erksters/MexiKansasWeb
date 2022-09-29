import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { retrieve_post } from "../api";

const PostCard = (props) => {
  const { title, imageArray, teaser, post_id } = props;

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

  return (
    <>
      <div className="Card Shadow"
        id={`${post_id}_button_to_read_post`}
        data-cy={`Card_${post_id}`}
      >
      <a
      id={`${post_id}_title_link_to_read_post`}
      data-cy={`Card__title_link_${post_id}`}
          className="Card_Title"
          target="_blank"
          href={`${retrieve_post}${post_id}`}
        >
          {title}
        </a>

        <a
          className="Card_Img_a_Tag_Parent"
          id={`${post_id}_Img_to_read_post`}
          data-cy={`Card_Img${post_id}`}
          target="_blank"
          href={`${retrieve_post}${post_id}`}
        >
          <img
            className="Card_Img"
            variant="top"
            src={denseArrayImages[imageArray[0]]}
          />
        </a>

        <div className="Card_Body">
          <div>{teaser.substring(0, 100)}...</div>
        </div>

        <a
          id={`${post_id}_Card_Button_to_read_post`}
          data-cy={`Card_Button_${post_id}`}
          className="Card_Button"
          target="_blank"
          href={`${retrieve_post}${post_id}`}
        >
          Read More
        </a>
      </div>
    </>
  );
};

export default PostCard;
