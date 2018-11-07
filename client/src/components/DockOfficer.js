import React from "react";
import {Link} from 'react-router-dom';

const DockOfficer = (props) => {

  if(!props.dockofficer){
    return null;
  }

  return (
    <React.Fragment>
        {/* <Link to = {"/dockOfficers/" + props.dockofficer.id} className="name">
          {props.dockofficer.name}
        </Link> */}
        <p>ID: {props.dockofficer._links.self.href}</p>
        <p>Name: {props.dockofficer.name}</p>
      </React.Fragment>
  )
}
export default DockOfficer;
