import React from 'react';
import Passenger from './Passenger.js';
import {Link} from 'react-router-dom';


const PassengerList = (props) => {
	const passengers = props.passengers.map((passenger) => {
		 	return (
				<li key={passenger.id} className="component-item">
					<div className = "component">
				<Passenger passenger={passenger} />
			</div>
			</li>
		)
		})

	return (
		<div>
			<Link to="/passengers/new">Add New Passenger</Link>
			<ul className="component-list">
	    		{passengers}
	  		</ul>
		</div>

	)
}
 export default PassengerList;
