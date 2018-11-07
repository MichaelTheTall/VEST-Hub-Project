import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import ShipListContainer from "./containers/ShipListContainer";
import BerthListContainer from "./containers/BerthListContainer";
import PassengerContainer from "./containers/PassengerContainer";
import DockOfficerContainer from "./containers/DockOfficerContainer";
import HomeContainer from "./containers/HomeContainer";
import PassengerFormContainer from "./containers/PassengerFormContainer";
import SinglePassengerContainer from "./containers/SinglePassengerContainer";
import PassengerEditFormContainer from "./containers/PassengerEditFormContainer";



class Main extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/ships" component={ShipListContainer} />
          <Route exact path="/berths" component={BerthListContainer} />
          <Switch>
          <Route exact path="/passengers" component={PassengerContainer} />
          <Route exact path = '/passengers/new' component={PassengerFormContainer}/>
          <Route exact path="/passengers/edit/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <PassengerEditFormContainer id = {id} />
            }}
          />
          <Route exact path="/passengers/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <SinglePassengerContainer id = {id} />
            }}
          />
          </Switch>
          <Route exact path="/dockOfficers" component={DockOfficerContainer} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
