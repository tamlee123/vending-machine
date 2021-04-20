import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Narbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/chips">Chips</NavLink>
        <NavLink to="/sardines">Sardines</NavLink>
        <NavLink to="/soda">Soda</NavLink>
      </div>
    );
  }
}

export default Narbar;
