import React from 'react';

const InspectionForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const inspection = {
        "date": event.target.date.value,
        "ship": event.target.ship.value,
        "dockOfficer": event.target.ship.value
      }
    props.handleInspectionPost(inspection)

  }

  const shipOptions = props.ships.map((ship, index) => {
    return <option key={index} value={ship._links.self.href}>{ship.name}</option>
  })

  const doffOptions = props.doffs.map((doff, index) => {
      return <option key={index} value={doff._links.self.href}>{doff.name}</option>
    })

      return (
        <div>
          <h4>Add a New Inspection</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="DD-MM-YYYY" name="date"/>
            <select name="ship">
              {shipOptions}
            </select>
            <select name="dockOfficer" >
              {doffOptions}
            </select>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default InspectionForm;
