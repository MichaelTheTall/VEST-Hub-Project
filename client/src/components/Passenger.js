import React from "react";

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
        <p>ID: {props.passenger.key}</p>
        <p>Name: {props.passenger.name}</p>
        <p>Status: {aboard}</p>
      </React.Fragment>
  )
}
export default Passenger;
