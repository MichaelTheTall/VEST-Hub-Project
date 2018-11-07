import React from "react";
import {Link} from 'react-router-dom';

const Passenger = (props) => {

  if(!props.passenger){
    return null;
  }

  return (
    <React.Fragment>
        {/* <Link to = {"/passengers/" + props.passenger.id} className="name">
          {props.passenger.name}
        </Link> */}
        <p>ID: {props.passenger._links.self.href}</p>
        <p>Name: {props.passenger.name}</p>
      </React.Fragment>
  )
}
export default Passenger;
