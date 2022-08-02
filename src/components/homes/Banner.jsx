import React from "react";
import { Link } from "react-router-dom";

export const Banner = (props) => {
  return (
    <div className="col-md-6">
      <div className="wraper">
        <img src={props.item} alt="banner" />
        <div className="content">
          <p>{props.desc}</p>
          <h3>{props.title}</h3>
          <Link to="/shop" className="btn" >Shop Now</Link>
        </div>
      </div>
    </div>
  );
};
