import React from 'react';

const DockOfficerForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const dockofficer = {
        "name": event.target.name.value
      }
    props.handleDockOfficerPost(dockofficer)

  }

      return (
        <div>
          <h4>Add a New Dock Officer</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Dock Officer Name" name="name"/>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default DockOfficerForm;
