import React, { Component } from "react";
import VendingMachine from "./VendingMachine";
import { Route } from "react-router-dom";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={VendingMachine} />
      </div>
    );
  }
}

export default App;
