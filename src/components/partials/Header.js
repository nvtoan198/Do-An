import React from "react";

const HeaderComponent = () => {
    return(
        <header id="header">
            <div className="container">
                <div className="row">
                <div className="logo col col-md-3">
                    <a href="#">
                    <img src="assets/images/logo.png" alt="Electronics" />
                    </a>
                </div>
                <div className="menu col col-md-9">
                    <nav>
                    <ul>
                        <li>
                        <a href="/">Home</a>
                        </li>
                        <li>
                        <a href="/shop">Shop</a>
                        </li>
                        <li>
                        <a href="/contact">Contact</a>
                        </li>
                        <li>
                        <a href="/cart">Shopping Cart</a>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
            </div>
        </header>
    )
}
export default React.memo(HeaderComponent);