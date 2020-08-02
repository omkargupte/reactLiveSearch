import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink exact activeClassName="active_tab" to="/">
        About US
      </NavLink>
      <NavLink
        exact
        activeClassName="active_tab"
        to="/contactUs"
        style={{ marginLeft: 10 }}
      >
        Contact US
      </NavLink>
      <NavLink
        exact
        activeClassName="active_tab"
        to="/user/omkar/gupte"
        style={{ marginLeft: 10 }}
      >
        User
      </NavLink>
      <NavLink
        exact
        activeClassName="active_tab"
        to="/search"
        style={{ marginLeft: 10 }}
      >
        Search
      </NavLink>
    </>
  );
};

export default NavBar;
