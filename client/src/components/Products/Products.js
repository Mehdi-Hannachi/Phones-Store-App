import React from "react";
import Product from "../Phone/Phone";
import "./products.css";

const Products = ({ phones, textSearch }) => {
  return (
    <div className="products">
      {phones
        .filter((phone) =>
          phone.modele.toUpperCase().includes(textSearch.toUpperCase())
        )
        .map((product) => (
          <Product product={product} key={product.id} phones={phones} />
        ))}
    </div>
  );
};

export default Products;