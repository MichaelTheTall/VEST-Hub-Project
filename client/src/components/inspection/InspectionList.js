import React from 'react';
import Inspection from './Inspection.js';
import {Link} from 'react-router-dom';


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
		<div>
			<Link to="/inspections/new">Add New Inspection</Link>
			<ul className="component-list">
	    		{inspections}
	  		</ul>
		</div>

	)
}
 export default InspectionList;
