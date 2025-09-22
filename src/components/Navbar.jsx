import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 text-2xl font-thin tracking-tight mt-5">
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
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to={"/anime"}
      >
        Anime
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/memes"}
      >
        Memes
      </NavLink>
    </div>
  );
};

export default Navbar;
