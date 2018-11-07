import React from 'react';
import DockOfficer from './DockOfficer.js';


const DockOfficerList = (props) => {
	const dockofficers = props.dockofficers.map((dockofficer) => {
		 	return (
				<li key={dockofficer.id} className="component-item">
					<div className = "component">
				<DockOfficer dockofficer={dockofficer} />
			</div>
			</li>
		)
		})

	return (
		<ul className="component-list">
	    {dockofficers}
	  </ul>

	)
}
 export default DockOfficerList;
