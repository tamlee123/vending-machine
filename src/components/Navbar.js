import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";
class Narbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink exact activeClassName="Navbar-active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/chips">
          Chips
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/sardines">
          Sardines
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/soda">
          Soda
        </NavLink>
      </div>
    );
  }
}

export default Narbar;
