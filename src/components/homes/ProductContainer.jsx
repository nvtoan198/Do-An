import React from "react";
import { Product } from "./Product";

const ProductContainer = ({ title, products }) => {
  console.log(products);
  return (
    <section className="row sales-products">
      <div className="wrapper col-md-12">
        <h2 className="e-title">{title}</h2>
        <div className="products">
          {products &&
            products.map((item, index) => {
              return <Product product={item} key={item.id} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
