import React from 'react';

const PassengerForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const passenger = {
        "name": event.target.name.value,
        "ship": event.target.ship.value
      }
    props.handlePassengerPost(passenger)

  }

    const shipOptions = props.ships.map((ship, index) => {
      return <option key={index} value={ship._links.self.href}>{ship.name}</option>
    })

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name"/>
            <select name="ship">
              {shipOptions}
            </select>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default PassengerForm;
