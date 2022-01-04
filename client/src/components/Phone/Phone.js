import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import "./phone.css";

const Product = ({
  product: { id, marque, modele, ram, camera, photo },
  phones,
}) => {
  return (
    <div style={{ width: "18rem", textAlign: "center" }}>
      <Card style={{ width: "18rem", textAlign: "center" }}>
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
          <ul className="phone-buttons">
            <li className="phone-li">Delete</li>
            <li className="phone-li">Edit</li>
            <li className="phone-li">
              <Link to={`/phones/phonedetails/${id}`} className="phone-a">
                <PhoneDetails phones={phones} />
              </Link>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
