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
      <div className="Card Shadow">
        <a
          className="Card_Title"
          target="_blank"
          href={`${retrieve_post}${post_id}`}
        >
          {title}
        </a>

        <a
          className="Card_Img_a_Tag_Parent"
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
