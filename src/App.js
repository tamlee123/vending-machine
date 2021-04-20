import React, { Component } from "react";
import VendingMachine from "./components/VendingMachine";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Sardines from "./components/Sardines";
import Soda from "./components/Soda";
import Chips from "./components/Chips";
import Narbar from "./components/Navbar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Narbar />
        <Switch>
          <Route path="/soda" component={Soda} />
          <Route path="/sardines" component={Sardines} />
          <Route path="/chips" component={Chips} />
          <Route path="/" component={VendingMachine} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
