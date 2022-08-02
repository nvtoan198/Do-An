import React, { useEffect } from "react";
import LayoutComponent from "../../components/Layout";
import ProductContainer from "../../components/homes/ProductContainer";
import { Banner } from "../../components/homes/Banner";
import { Slider } from "../../components/homes/Silder";
import { useDispatch, useSelector } from "react-redux";
import { productActions, selectProducts } from "../../app/store/reducers";
import { LoadingIndicator } from "../../components/common/LoadingIndicator";

export const HomePage = () => {
  const { products, isLoading } = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.fetchProducts());
  }, []);
  return (
    <LayoutComponent notShowBreadcrum>
      <Slider />
      <div className="container">
        <section className="row banner">
          <Banner />
          <Banner />
        </section>
        {isLoading && <LoadingIndicator />}
        {products && (
          <ProductContainer title="Sales Products" products={products} />
        )}
        {/*<ProductContainer title="New Products" />*/}
      </div>
    </LayoutComponent>
  );
};

export default HomePage;
