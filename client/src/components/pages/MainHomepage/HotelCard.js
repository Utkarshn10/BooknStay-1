import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import Rating from "../../Rating";
import ReactStars from "react-rating-stars-component";

export default function HotelCard() {
  return (
    <div>
      {/* <Rating/> */}

      <Card style={{width: "20rem"}}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <Card.Body>
          <Card.Title>Ananya's Hotel </Card.Title>

          <Card.Text>Lorem, ipsum dolor.</Card.Text>
          <Card.Title>
            {" "}
            <ReactStars count={5} value={4.5} size={50} edit={false} />{" "}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Rs 15000/night - Free Cancellation</ListGroupItem>
          {/* <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
        </ListGroup>

        <Card.Body>
          <Card.Link href="#"> 4.6 </Card.Link>
          <Card.Link href="#">Read More..</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
