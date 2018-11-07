import React from "react";

const DockOfficer = (props) => {

  if(!props.dockofficer){
    return null;
  }

  return (
    <React.Fragment>
        <p>ID: {props.dockofficer.id}</p>
        <p>Name: {props.dockofficer.name}</p>
      </React.Fragment>
  )
}
export default DockOfficer;