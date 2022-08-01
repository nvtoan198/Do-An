import React from "react";
import product from "../../assets/images/products/product-01.jpg";

export const Product = () => {
  return (
    <div className="product">
      <div className="image-wrap">
        <a href="#">
          <img src={product} alt="Product 01" />
        </a>
        <div className="btn-addtocart">
          <button>Add to cart</button>
        </div>
      </div>
      <div className="content">
        <h4 className="title">Product 01</h4>
        <p className="description">
          Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque
          a nunc vel diam auctor
        </p>
        <div className="price">$25.00</div>
      </div>
    </div>
  );
};
