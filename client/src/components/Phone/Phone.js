import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import "./phone.css";

const Product = ({
  product: { id, marque, modele, ram, camera, photo },
  phones,
}) => {
  const role = "admin";
  return (
    <div style={{ width: "18rem", textAlign: "center" }}>
      <Card style={{ width: "18rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src={
            "https://lh3.googleusercontent.com/0vYwY7CRjERuDsgoZWCBWILtK7y_V7U4PZAQR2B3IksDDlatchY8ugyJbYnU6-PB2X-7G_SF--wEtVSIBn_J-m5ECwAkkTXTqNkK0jOOVs_ijsEVydzRbuMXNTZsOi2EYwd2cFc=s512-c"
          }
          className="phone-style"
        />
        {/* <Card.Img variant="top" src={photo} className="phone-style" /> */}
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
          {role === "admin" ? (
            <div className="admin-btns">
              <Button variant="danger">Delete</Button>
              <Button variant="secondary">Edit</Button>
              <PhoneDetails phones={phones} />
            </div>
          ) : (
            <PhoneDetails />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
