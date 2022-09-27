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
      <Card className="Card" >
      <Card.Title className="Card_Title" >{title}</Card.Title>

        <Card.Img
        style={{  cursor: 'pointer'}}
          onClick={() => {
            window.open(`${search_post}${post_id}`, "_blank").focus();
          }}
          height={180}
          variant="top"
          src={denseArrayImages[imageArray[0]]}
        />
        <Card.Body className="Card_Body">
          <Card.Text>{teaser.substring(0, 100)}...</Card.Text>
        </Card.Body>
        <Card.Footer
          bsPrefix=""
          style={{ justifyContent: "center", display: "flex" }}
        >
          <Button
            className="Card_Button"
            onClick={() => {
              window.open(`${search_post}${post_id}`, "_blank").focus();
            }}
          >
            Read More
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default PostCard;
