import React from 'react';
import Ship from './ship/Ship.js';


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
        <div className="departure-list">
        <h4>Departures:</h4>
	        <ul className="component-list">
	            {ships}
	        </ul>
        </div>
	)
}
 export default Depart;
