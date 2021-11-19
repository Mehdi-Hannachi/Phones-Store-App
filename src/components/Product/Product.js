import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import "./product.css";

const Product = ({
  product: { id, marque, modele, ram, camera, photo },
  phones,
}) => {
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
          <ul className="phone-buttons">
            <li className="phone-li">
              <Link className="phone-a">Add to Cart</Link>
            </li>
            <li className="phone-li">
              {/* <Link className="phone-a" to={`/phones/phonedetails/${id}`}>
                <Route
                  exact
                  path="/phones/phonedetails/:myid"
                  render={(defaultProps) => (
                    <PhoneDetails {...defaultProps} phones={phones} />
                  )}
                />
              </Link> */}
              <PhoneDetails id={id} phones={phones} />
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
