import React from "react";
import { Link } from "react-router-dom";
import slider from "../../assets/images/slider1.jpg";

export const Slider = () => {
  return (
    <div className="slider">
      <section className="row">
        <div className="wrap">
          <img src={slider} alt="bg-slider" />
          <div className="caption">
            <h2>The Best 4K PC In The World</h2>
            <p>
              Our toys are astm certified for safety. We use water-based paints
              &amp; natural polish on our toys, making them absolutely
              child-safe
            </p>
            <Link to="/shop" className="btn">Shop Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
