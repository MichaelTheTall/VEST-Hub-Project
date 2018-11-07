import React from "react";
import {Link} from 'react-router-dom';

const Berth = (props) => {

  if(!props.berth){
    return null;
  }

  return (
    <React.Fragment>
      <p>{props.berth.id}</p>
      {/* <Link to = {"/ships/" + props.docked_ship.id}>
          {props.berth.docked_ship.name}
        </Link> */}
    </React.Fragment>
  )
}
export default Berth;
