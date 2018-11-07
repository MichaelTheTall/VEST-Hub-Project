import React from "react";
import {Link} from "react-router-dom";

const DockOfficer = (props) => {

  if(!props.dockofficer){
    return null;
  }

  return (
    <React.Fragment>
        <p>ID: {props.dockofficer.id}</p>
        <p>Name: <Link to = {"/dockOfficers/" + props.dockofficer.id} className="name">
        {props.dockofficer.name}</Link></p>
      </React.Fragment>
  )
}
export default DockOfficer;
