import React from 'react';

const ShipForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const ship = {
        "name": event.target.name.value,
        "capacity": event.target.capacity.value,
        "origin": event.target.origin.value,
        "destination": event.target.destination.value
      }
    props.handleShipPost(ship)

  }

      return (
        <div>
          <h4>Add a New Ship</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ship Name" name="name"/>
            <input type="number" placeholder="Capacity" name="capacity"/>
            <input type="text" placeholder="Origin" name="origin"/>
            <input type="text" placeholder="Destination" name="destination"/>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default ShipForm;
