import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/home";
import DetailPage from "../pages/detail";
import ShopPage from "../pages/shop";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
