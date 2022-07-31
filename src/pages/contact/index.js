import React from "react";
import LayoutComponent from '../../components/Layout';

const ContactPage = () => {
  return (
    <LayoutComponent>
      <div className="container">
        <section className="row">
          <div className="col-md-6">
            <div className="wrap">
              <h3>Contact info</h3>
              <div>
                <h5>Address</h5>
                <p>3721 Single Street Quincy, MA 02169</p>
              </div>
              <div>
                <h5>Phone</h5>
                <p>123-456-7890</p>
              </div>
              <div>
                <h5>Email</h5>
                <p>info@email.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wrap">
              <h3>Send Us A Message</h3>
              <form>
                <div>
                  <label>Your Name *</label>
                  <input type="text" name="your-name" id="your-name" />
                </div>
                <div>
                  <label>Your Email *</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div>
                  <label>Subject *</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Message</label>
                  <input type="text" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </LayoutComponent>
  )
};

export default ContactPage;