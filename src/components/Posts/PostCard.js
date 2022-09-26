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
      <Card>
        <Card.Img
          height={180}
          variant="top"
          src={denseArrayImages[imageArray[0]]}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{teaser}</Card.Text>
          <Button href={`${search_post}${post_id}`} variant="primary">
            Read More
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
