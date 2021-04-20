import React, { Component } from "react";
import sodaImg from "../v2.jpg";
import "../style/Soda.css";
class Soda extends Component {
  render() {
    return (
      <div className="soda">
        <img src={sodaImg} alt="pepsi can" />
      </div>
    );
  }
}

export default Soda;
