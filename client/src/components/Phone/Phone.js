import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import EditPhone from "../EditPhone/EditPhone";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import { BsFillTrashFill } from "react-icons/bs";

import "./phone.css";

const Product = ({ product, phones }) => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
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
          <Card.Title>Price : {product.price} $</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Model : {product.model}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          {user && user.role === "admin" ? (
            <div className="admin-btns">
              <h2>
                <BsFillTrashFill />
              </h2>

              <PhoneDetails phone={product} />
              <EditPhone phone={product} />
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
