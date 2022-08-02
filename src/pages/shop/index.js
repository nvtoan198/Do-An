import React from "react";
import LayoutComponent from '../../components/Layout';
import { Product } from "../../components/homes/Product";
import { useDispatch, useSelector } from "react-redux";
import { productActions, selectProducts } from "../../app/store/reducers";
import { LoadingIndicator } from "../../components/common/LoadingIndicator";

const ShopPage = () => {
  return (
    <LayoutComponent>
      <div className="container">
        <section className="row">
          <div className="wrapper col-md-12">
            <div className="products">
              Shop
            </div>
          </div>
        </section>
      </div>
    </LayoutComponent>
  )
};

export default ShopPage;
