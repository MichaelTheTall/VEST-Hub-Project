import React from 'react';

const PassengerForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const passenger = {
        "name": event.target.name.value
      }
    props.handlePassengerPost(passenger)

  }

      return (
        <div>
          <h4>Add a New Passenger</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Passenger Name" name="name"/>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default PassengerForm;
