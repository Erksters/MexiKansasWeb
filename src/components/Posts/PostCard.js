import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { search_post } from "../api";

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
      <div className="Card">
        <div
          className="Card_Title"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open(`${search_post}${post_id}`, "_blank").focus();
          }}
        >
          {title}
        </div>

        <img
          className="Card_Img"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open(`${search_post}${post_id}`, "_blank").focus();
          }}
          variant="top"
          src={denseArrayImages[imageArray[0]]}
        />
        <div className="Card_Body">
          <div>{teaser.substring(0, 100)}...</div>
        </div>

        <Button
          className="Card_Button"
          onClick={() => {
            window.open(`${search_post}${post_id}`, "_blank").focus();
          }}
        >
          Read More
        </Button>
      </div>
    </>
  );
};

export default PostCard;
