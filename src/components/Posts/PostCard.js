import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PostCard = (props) => {
  const { title, imageArray, teaser } = props;

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
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
