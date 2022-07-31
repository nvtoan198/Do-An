import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
    return(
        <Footer id="footer">
            <div className="footer-widgets">
                <div className="container">
                <div className="row">
                    <div className="col col-md-3">
                    <h3 className="title">Address</h3>
                    <p>3721 Single Street Quincy, MA 02169</p>
                    </div>
                    <div className="col col-md-3">
                    <h3 className="title">Contacts</h3>
                    <p>
                        123-456-7890
                        <br />
                        info@email.com
                    </p>
                    </div>
                    <div className="col col-md-6">
                    <h3 className="title">Subscribe to our newsletter</h3>
                    <p>
                        Subscribe to the weekly newsletter for all the latest updates &amp;
                        get a 10% off bill offers.
                    </p>
                    <form className="newsletter">
                        <input type="email" placeholder="Your email address" />
                        <button type="submit">Submit</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                <div className="row">
                    <div className="col col-md-12">
                    © Copyright 2022 Digital - Powered by Zika.
                    </div>
                </div>
                </div>
            </div>
        </Footer>
    )
}
export default React.memo(FooterComponent);