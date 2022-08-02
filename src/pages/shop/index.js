import React from "react";
import LayoutComponent from '../../components/Layout';
import { Product } from "../../components/homes/Product";

const ShopPage = () => {
  return (
    <LayoutComponent>
      <div className="container">
        <section className="row">
          <div className="wrapper col-md-12">
            <div className="products">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </section>
      </div>
    </LayoutComponent>
  )
};

export default ShopPage;