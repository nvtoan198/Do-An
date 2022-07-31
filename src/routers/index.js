import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/home";
import ShopPage from "../pages/shop";
import ContactPage from "../pages/contact";
import CartPage from "../pages/cart";
import DetailPage from "../pages/detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
