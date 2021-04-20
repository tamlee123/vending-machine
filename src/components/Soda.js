import React, { Component } from "react";
import { Link } from "react-router-dom";
import sodaImg from "../v2.jpg";
import "../style/Soda.css";
class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <img src={sodaImg} alt="pepsi can" />
        <h1>SODAAAAA IS MY FAVORITE</h1>
        <h3>But now I drink sparkling water instead</h3>
        <p>(I still miss Soda)</p>
        <img src={sodaImg} alt="coca cola can" />
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Soda;
