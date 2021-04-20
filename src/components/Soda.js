import React, { Component } from "react";
import { Link } from "react-router-dom";
import sodaImg from "../v2.jpg";
import Message from "./Message";
import "../style/Soda.css";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <img src={sodaImg} alt="pepsi can" />
        <Message>
          <h1>SODAAAAA IS MY FAVORITE</h1>
          <h3>I needed another soda. I'd only had six since breakfast. </h3>
          <p>(I still miss Soda)</p>
          <Link to="/">Back</Link>
        </Message>
        <img src={sodaImg} alt="coca cola can" />
      </div>
    );
  }
}

export default Soda;
