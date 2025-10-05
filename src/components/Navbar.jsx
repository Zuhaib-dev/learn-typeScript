import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center text-2xl gap-5 mt-10">
      <NavLink className={(e) => (e.isActive ? "text-rose-500" : "")} to={"/"}>
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/products"}
      >
        Products
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/users"}
      >
        Users
      </NavLink>
    </div>
  );
};

export default Navbar;
