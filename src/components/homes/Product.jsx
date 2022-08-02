import React from "react";

export const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="image-wrap">
        <a href="#">
          <img src={product.image} alt="Product 01" />
        </a>
        <div className="btn-addtocart">
          <button>Add to cart</button>
        </div>
      </div>
      <div className="content">
        <h4 className="title">{product.title}</h4>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <div className="price">{product.price}$</div>
      </div>
    </div>
  );
};
