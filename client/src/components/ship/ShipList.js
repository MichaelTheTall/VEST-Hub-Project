import React from 'react';
import {Link} from 'react-router-dom';
import Ship from './Ship.js';


const ShipList = (props) => {
	const ships = props.ships.map((ship) => {
		 	return (
				<li key={ship.id} className="component-item">
					<div className = "component">
				<Ship ship={ship} />
			</div>
			</li>
		)
		})

	return (
		<div>
			<Link to="/ships/new">Add New Ship</Link>
			<ul className="component-list">
	    		{ships}
	  		</ul>
		</div>

	)
}
 export default ShipList;
