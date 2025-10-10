import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center text-2xl gap-5 mt-10  ">
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
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/anime"}
      >
        Animes
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/jokes"}
      >
        Jokes
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/burger"}
      >
        Burger
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/breakingbad"}
      >
        Breaking Bad
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/harrypotter"}
      >
        Harry Potter
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/got"}
      >
        GOT
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/memes"}
      >
        Memes
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/todo"}
      >
        To-Do
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/cat"}
      >
        Cats
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-500" : "")}
        to={"/dog"}
      >
        Dog
      </NavLink>
    </div>
  );
};

export default Navbar;
