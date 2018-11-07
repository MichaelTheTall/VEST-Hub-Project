import React from 'react';
import Ship from './ship/Ship.js';


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
        <div className="arrival-list">
        <h4>Arrivals:</h4>
	        <ul className="component-list">
	            {ships}
	        </ul>
        </div>
	)
}
 export default Arrival;
