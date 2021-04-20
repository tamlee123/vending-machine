import React, { Component } from "react";
import chipImage from "../v1.jpg";
import "../style/Chips.css";
import { Link } from "react-router-dom";

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = { bags: [] };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    this.setState((prevState) => ({
      bags: [...prevState.bags, { x, y }],
    }));
  }

  render() {
    const bags = this.state.bags.map((bag, i) => (
      <img
        key={i}
        src={chipImage}
        className="bag"
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
        alt="bag of lay's chip"
      />
    ));
    return (
      <div className="Chips">
        <h1>bags eaten: {this.state.bags.lengths}</h1>
        <button onClick={this.handleClick}>Nom Nom Nom</button>
        <Link to="/">Back</Link>
        {bags}
      </div>
    );
  }
}

export default Chips;
