import React from "react";
import {Link} from "react-router-dom";

const Passenger = (props) => {

  var aboard;

  if(!props.passenger){
    return null;
  }

  if(props.passenger.shipName){
    aboard = "Aboard " + props.passenger.shipName;
  } else {
    aboard = "Aboard Station";
  }

  return (
    <React.Fragment>
      <p>ID: {props.passenger.id}</p>
      <p>Name: <Link to = {"/passengers/" + props.passenger.id} className="name">
        {props.passenger.name}</Link></p>
      <p>Status: {aboard}</p>
    </React.Fragment>
  )
}
export default Passenger;
