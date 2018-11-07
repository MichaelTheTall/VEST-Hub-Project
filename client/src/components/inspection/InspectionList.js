import React from 'react';
import Inspection from './Inspection.js';


const InspectionList = (props) => {
	const inspections = props.inspections.map((inspection) => {
		 	return (
				<li key={inspection.id} className="component-item">
					<div className = "component">
				<Inspection inspection={inspection} />
			</div>
			</li>
		)
		})

	return (
		<ul className="component-list">
	    {inspections}
	  </ul>

	)
}
 export default InspectionList;
