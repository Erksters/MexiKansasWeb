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
      <Card style={{ maxWidth: "269.95px", height: "400px" }}>
        <Card.Img
          height={180}
          variant="top"
          src={denseArrayImages[imageArray[0]]}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{teaser.substring(0, 100)}...</Card.Text>
        </Card.Body>
        <Card.Footer
          bsPrefix=""
          style={{ justifyContent: "center", display: "flex" }}
        >
          <Button
            style={{ width: "100%" }}
            href={`${search_post}${post_id}`}
            variant="primary"
          >
            Read More
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default PostCard;
