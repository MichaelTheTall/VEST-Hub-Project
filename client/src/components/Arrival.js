import React from 'react';
import Ship from './Ship.js';


const Arrival = (props) => {
	const ships = props.arrivals.map((ship) => {
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
 export default Arrival;
