import React from 'react';
import {Link} from 'react-router-dom';
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
		<div>
			<Link to="/dockOfficers/new">Add New Dock Officer</Link>
			<ul className="component-list">
	    		{dockofficers}
	  		</ul>
		</div>
	)
}
 export default DockOfficerList;
