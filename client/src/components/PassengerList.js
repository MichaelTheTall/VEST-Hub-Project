import React from 'react';
import Passenger from './Passenger.js';


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
		<ul className="component-list">
	    {passengers}
	  </ul>

	)
}
 export default PassengerList;
