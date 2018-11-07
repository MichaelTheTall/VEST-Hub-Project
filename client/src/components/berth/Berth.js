import React from "react";

const Berth = (props) => {

  var status;

  if(!props.berth){
    return null;
  }

  if(props.berth.shipName){
    status = props.berth.shipName + " docked"
  } else {
    status = "Berth Empty"
  }

  return (
    <React.Fragment>
      <p>Berth {props.berth.id}</p>
      <p>Status: {status}</p>
    </React.Fragment>
  )
}
export default Berth;
