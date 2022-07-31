import React from "react";
import { Menu } from 'antd';
import { Link, useLocation } from "react-router-dom";

const MenuComponent = () => {
    const { pathname } = useLocation();
    const items = [
        {label: <Link to="/">Home</Link>, key: '/'},
        {lable: <Link to="/shop">Shop</Link>, key: '/shop'},
        {lable: <Link to="/contact">Contact</Link>, key: '/contact'},
        {lable: <Link to="/cart">Cart</Link>, key: '/cart'}
    ];
    return(
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={pathname}
            items={items}
        />
    )
}
export default React.memo(MenuComponent);