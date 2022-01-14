import React, { useEffect } from "react";
import Product from "../Phone/Phone";
import { useDispatch, useSelector } from "react-redux";
import "./products.css";
import { getAllPhone } from "../../JS/actions/phoneActions";
import { Redirect } from "react-router-dom";

const Products = ({ textSearch }) => {
  const dispatch = useDispatch();
  const phones = useSelector((state) => state.phoneReducer.phones);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  useEffect(() => {
    dispatch(getAllPhone());
  }, [dispatch]);

  return !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <div className="products">
      {phones &&
        phones
          .filter((phone) =>
            phone.model.toUpperCase().includes(textSearch.toUpperCase())
          )
          .map((product) => (
            <Product product={product} key={product._id} phones={phones} />
          ))}
    </div>
  );
};

export default Products;
