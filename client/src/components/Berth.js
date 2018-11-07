import React from "react";

const Berth = (props) => {

  if(!props.berth){
    return null;
  }

  return (
    <React.Fragment>
      <p>{props.berth.id}</p>
    </React.Fragment>
  )
}
export default Berth;
