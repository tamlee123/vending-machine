import React, { Component } from "react";
import { Link } from "react-router-dom";
import vendingMachineImage from "../v3.jpg";
import Message from "./Message";
import "../style/VendingMachine.css";

class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImage})` }}
      >
        <Message>
          <h1>HELLO, I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO HAVE</h1>
        </Message>
        <Message>
          <h1>
            <Link to="/soda">Soda</Link>
          </h1>
          <h1>
            <Link to="/sardines">Sardines</Link>
          </h1>
          <h1>
            <Link to="/chips">Chips</Link>
          </h1>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;
