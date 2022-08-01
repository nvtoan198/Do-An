import React, { useEffect } from "react";
import LayoutComponent from "../../components/Layout";
import ProductContainer from "../../components/homes/ProductContainer";
import { Banner } from "../../components/homes/Banner";
import { Slider } from "../../components/homes/Silder";
import { useSelector } from "react-redux";
import { selectProducts } from "../../app/store/reducers/index.js";

const HomePage = () => {
  const { products } = useSelector(selectProducts);
  console.log(products);
  useEffect(() => {});
  return (
    <LayoutComponent>
      <Slider />
      <div className="container">
        <section className="row banner">
          <Banner />
          <Banner />
        </section>
        <ProductContainer title="Sales Products" />
        <ProductContainer title="New Products" />
      </div>
    </LayoutComponent>
  );
};

export default HomePage;
