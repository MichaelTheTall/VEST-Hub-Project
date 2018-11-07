import React from "react";

const Inspection = (props) => {

  if(!props.inspection){
    return null;
  }

  return (
    <React.Fragment>
        <p>ID: {props.inspection.id}</p>
        <p>Inspection Date: {props.inspection.date}</p>
        <p>Ship Inspected: {props.inspection.ship_id}</p>
        <p>{props.inspection._links.ship.href}</p>
        <p>Inspecting Officer: {props.inspection.dock_officer_id}</p>
        <p>{props.inspection._links.dockOfficer.href}</p>
      </React.Fragment>
  )
}
export default Inspection;
