import React from "react";

const Inspection = (props) => {

  if(!props.inspection){
    return null;
  }

  return (
    <React.Fragment>
        <p>ID: {props.inspection._links.self.href}</p>
        <p>Inspection Date: {props.inspection.date}</p>
        <p>Ship Inspected: {props.inspection.ship_id}</p>
        <p>Inspecting Officer: {props.inspection.dock_officer_id}</p>
      </React.Fragment>
  )
}
export default Inspection;
