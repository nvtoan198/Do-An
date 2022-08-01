import React from "react";
import LayoutComponent from "../../components/Layout";
import ProductContainer from "../../components/homes/ProductContainer";
import { Banner } from "../../components/homes/Banner";
import { Slider } from "../../components/homes/Silder";

const HomePage = () => {
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
