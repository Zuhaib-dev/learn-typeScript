import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 text-2xl font-thin tracking-tight mt-5">
      <Link   to={"/"}>Home</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/users"}>Users</Link>
      <Link to={"/anime"}>Anime</Link>
    </div>
  );
};

export default Navbar;
