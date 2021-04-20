import React, { Component } from "react";
import { Link } from "react-router-dom";
import vendingMachineImage from "../v3.jpg";
import "../style/VendingMachine.css";
class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImage})` }}
      >
        <h1>HELLO, I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO HAVE</h1>
        <Link to="/soda">Soda</Link>
        <Link to="/sardines">Sardines</Link>
        <Link to="/chips">Chips</Link>
      </div>
    );
  }
}

export default VendingMachine;
