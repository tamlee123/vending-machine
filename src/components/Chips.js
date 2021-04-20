import React, { Component } from "react";
import chipImage from "../v1.jpg";
import { Link } from "react-router-dom";
import Message from "./Message";
import "../style/Chips.css";

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
        <Message>
          <h1>bags eaten: {this.state.bags.length}</h1>
          <button onClick={this.handleClick}>Nom Nom Nom</button>
          <h1>
            <Link to="/">Back</Link>
          </h1>
        </Message>
        {bags}
      </div>
    );
  }
}

export default Chips;
