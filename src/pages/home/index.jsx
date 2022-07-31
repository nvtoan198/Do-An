import React from "react";
import LayoutComponent from '../../components/Layout';
import slider from '../../assets/images/slider1.jpg';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import product from '../../assets/images/products/product-01.jpg';

const HomePage = () => {
  return (
    <LayoutComponent>
      <div className="slider">
        <section className="row">
          <div className="wrap">
            <img src={slider} alt="bg-slider"/>
            <div className="caption">
              <h2>The Best 4K PC In The World</h2>
              <p>
                Our toys are astm certified for safety. We use water-based paints
                &amp; natural polish on our toys, making them absolutely child-safe
              </p>
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="row banner">
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
          <div className="col-md-6">
            <div className="wraper">
              <img src={banner2} alt="banner" />
              <div className="content">
                <p>collection ss22</p>
                <h3>Put The World On Mute</h3>
                <button className="btn">Shop Now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="row sales-products">
          <div className="wrapper col-md-12">
            <h2 className="e-title">Sales Products</h2>
            <div className="products">
              <div className="product">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      src={product}
                      alt="Product 01"
                    />
                  </a>
                  <div className="btn-addtocart">
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Product 01</h4>
                  <p className="description">
                    Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                    Quisque a nunc vel diam auctor
                  </p>
                  <div className="price">$25.00</div>
                </div>
              </div>
              <div className="product">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      src={product}
                      alt="Product 01"
                    />
                  </a>
                  <div className="btn-addtocart">
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Product 01</h4>
                  <p className="description">
                    Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                    Quisque a nunc vel diam auctor
                  </p>
                  <div className="price">$25.00</div>
                </div>
              </div>
              <div className="product">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      src={product}
                      alt="Product 01"
                    />
                  </a>
                  <div className="btn-addtocart">
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Product 01</h4>
                  <p className="description">
                    Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                    Quisque a nunc vel diam auctor
                  </p>
                  <div className="price">$25.00</div>
                </div>
              </div>
              <div className="product">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      src={product}
                      alt="Product 01"
                    />
                  </a>
                  <div className="btn-addtocart">
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Product 01</h4>
                  <p className="description">
                    Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                    Quisque a nunc vel diam auctor
                  </p>
                  <div className="price">$25.00</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row new-products">
          <div className="wrapper col-md-12">
            <h2 className="e-title">New Products</h2>
            <div className="products">
              <div className="product">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      src={product}
                      alt="Product 01"
                    />
                  </a>
                  <div className="btn-addtocart">
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Product 01</h4>
                  <p className="description">
                    Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                    Quisque a nunc vel diam auctor
                  </p>
                  <div className="price">$25.00</div>
                </div>
              </div>
              <div className="product">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      src={product}
                      alt="Product 01"
                    />
                  </a>
                  <div className="btn-addtocart">
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Product 01</h4>
                  <p className="description">
                    Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                    Quisque a nunc vel diam auctor
                  </p>
                  <div className="price">$25.00</div>
                </div>
              </div>
              <div className="product">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      src={product}
                      alt="Product 01"
                    />
                  </a>
                  <div className="btn-addtocart">
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Product 01</h4>
                  <p className="description">
                    Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                    Quisque a nunc vel diam auctor
                  </p>
                  <div className="price">$25.00</div>
                </div>
              </div>
              <div className="product">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      src={product}
                      alt="Product 01"
                    />
                  </a>
                  <div className="btn-addtocart">
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Product 01</h4>
                  <p className="description">
                    Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                    Quisque a nunc vel diam auctor
                  </p>
                  <div className="price">$25.00</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutComponent>
  )
};

export default HomePage;
