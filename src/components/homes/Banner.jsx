import React from "react";
import banner1 from "../../assets/images/banner1.jpg";

export const Banner = () => {
  return (
    <div className="col-md-6">
      <div className="wraper">
        <img src={banner1} alt="banner" />
        <div className="content">
          <p>Limited Edition</p>
          <h3>Virtual Reality</h3>
          <button className="btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};
