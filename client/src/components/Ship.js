import React from "react";
import {Link} from 'react-router-dom';

const Ship = (props) => {

  var inspected;
  var berthstatus;

  if(!props.ship){
    return null;
  }

  if(props.ship.inspected){
    inspected = "Inspected";
  } else {
    inspected = "Awaiting Inspection";
  }

  if(props.ship.berth){
    berthstatus = "In Berth " + props.ship.berth;
  } else {
    berthstatus = "Awaiting Arrival";
  }


  
  return (
    <React.Fragment>
        <Link to = {"/ships/" + props.ship.index} className="name">
          {props.ship.name}
        </Link>
        <p>{props.ship.index}</p>
      <p>Capacity: {props.ship.capacity}</p>
      <p>Berth: {berthstatus}</p>
      <p>Origin: {props.ship.origin}</p>
      <p>Destination: {props.ship.destination}</p>
      <p>Inspected: {inspected}</p>
    </React.Fragment>
  )
}
export default Ship;
