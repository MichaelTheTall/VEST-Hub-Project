import React from "react";
import {Link} from 'react-router-dom';

const Ship = (props) => {

  var inspected;
  
  if(props.ship.inspected){
    inspected = "Y";
  } else {
    inspected = "N";
  }

  if(!props.ship){
    return null;
  }

  return (
    <React.Fragment>
        <Link to = {"/ships/" + props.ship.id} className="name">
          {props.ship.name}
        </Link>
      <p>Capacity: {props.ship.capacity}</p>
      <p>Berth: {props.ship.berth}</p>
      <p>Origin: {props.ship.origin}</p>
      <p>Destination: {props.ship.destination}</p>
      <p>Inspected: {inspected}</p>
    </React.Fragment>
  )
}
export default Ship;
