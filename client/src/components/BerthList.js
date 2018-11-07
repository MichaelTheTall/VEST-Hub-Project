import React from 'react';
import Berth from './Berth.js';


const BerthList = (props) => {
	const berths = props.berths.map((berth) => {
		 	return (
				<li key={berth.id} className="component-item">
					<div className = "component">
				<Berth berth={berth} />
			</div>
			</li>
		)
		})

	return (
		<ul className="component-list">
	    {berths}
	  </ul>

	)
}
 export default BerthList;

