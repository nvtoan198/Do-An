import React from "react";
import logo from '../../logo.png';
import { Layout } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
    return(
        <Header id="header" className="container">
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </Header>
    )
}
export default React.memo(HeaderComponent);