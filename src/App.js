import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
