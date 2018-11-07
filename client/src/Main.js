import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ShipListContainer from "./containers/ShipListContainer";
import BerthListContainer from "./containers/BerthListContainer";
import PassengerContainer from "./containers/PassengerContainer";
import DockOfficerContainer from "./containers/DockOfficerContainer";
import HomeContainer from "./containers/HomeContainer";


class Main extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/about" component={About} />
          <Route path="/ships" component={ShipListContainer} />
          <Route path="/berths" component={BerthListContainer} />
          <Route path="/passengers" component={PassengerContainer} />
          <Route path="/dockOfficers" component={DockOfficerContainer} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
