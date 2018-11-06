import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Ships from "./Ships";
import Berths from "./Berths";
import Passengers from "./Passengers";
import DockOfficers from "./DockOfficers";


class Main extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/ships" component={Ships} />
          <Route path="/berths" component={Berths} />
          <Route path="/passengers" component={Passengers} />
          <Route path="/dockOfficers" component={DockOfficers} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
