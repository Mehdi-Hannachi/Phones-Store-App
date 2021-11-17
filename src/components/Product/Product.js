import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ product: { id, marque, modele, ram, camera, photo } }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={photo} className="phone-style" />
        <Card.Body>
          <Card.Title>Price : $</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Marque : {marque}</ListGroupItem>
          <ListGroupItem>Modele : {modele}</ListGroupItem>
          <ListGroupItem>Ram : {ram}</ListGroupItem>
          <ListGroupItem>Camera : {camera}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Add To Cart</Card.Link>
          <Link to={`/phones/phonedetails/${id}`}>
            <Card.Link>Show Phone Details</Card.Link>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
