import React, { Component } from "react";
import chipImage from "./v1.jpg";
class Chips extends Component {
  render() {
    return (
      <div className="soda">
        <img src={chipImage} alt="bag of lay's chip" />
      </div>
    );
  }
}

export default Chips;
