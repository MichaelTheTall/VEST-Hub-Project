import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import ShipListContainer from "./containers/ShipListContainer";
import Berths from "./components/Berths";
import Passengers from "./components/Passengers";
import DockOfficers from "./components/DockOfficers";


class Main extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/ships" component={ShipListContainer} />
          <Route path="/berths" component={Berths} />
          <Route path="/passengers" component={Passengers} />
          <Route path="/dockOfficers" component={DockOfficers} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
