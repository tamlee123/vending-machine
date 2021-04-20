import React, { Component } from "react";
import VendingMachine from "./VendingMachine";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Chips from "./Chips";
class App extends Component {
  render() {
    return (
      <div className="App">
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
