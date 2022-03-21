import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Rating from '../../Rating'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

export default function HotelCard(props) {
  return (
    <div>
      
      {/* <Rating/> */}
      
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <Card.Body>
        <Card.Title>{props.hotel_name} </Card.Title>
        

          <Card.Text>{props.city}.</Card.Text>
          <Card.Title> <ReactStars count={5} value={props.hotel_rating} size={50} edit={false}  /> </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{props.price} - Free Cancellation</ListGroupItem>
          {/* <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
        </ListGroup>

        <Card.Body>
          <Card.Link href="#"> {props.user_rating}  </Card.Link>
          {/* <Link to={`/hotel/${props._id}`}></Link> */}
          <Card.Link href="#">Read More..</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
