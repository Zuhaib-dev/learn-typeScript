import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import PageNotFound from "../pages/PageNotFound";
import Users from "../pages/Users";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
