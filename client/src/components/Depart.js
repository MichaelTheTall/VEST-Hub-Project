import React from 'react';
import Ship from './Ship.js';


const Depart = (props) => {
	const ships = props.departures.map((ship) => {
		 	return (
				<li key={ship.id} className="component-item">
					<div className = "component">
				<Ship ship={ship} />
			</div>
			</li>
		)
		})

	return (
		<ul className="component-list">
	    {ships}
	  </ul>

	)
}
 export default Depart;
