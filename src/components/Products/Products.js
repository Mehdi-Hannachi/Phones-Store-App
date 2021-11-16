import React from "react";
import Product from "../Product/Product";
import "./products.css";

const Products = ({ phones, textSearch }) => {
  return (
    <div className="products">
      {phones
        .filter((phone) =>
          phone.modele.toUpperCase().includes(textSearch.toUpperCase())
        )
        .map((product) => (
          <Product product={product} key={product.id} />
        ))}
    </div>
  );
};

export default Products;
