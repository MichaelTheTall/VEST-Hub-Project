import React  from 'react';

const PassengerDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.passenger.id);
  }

  const onEdit = () => {
    props.handleEdit(props.passenger.id)
  }

  return (
    <React.Fragment>
    <button onClick={onEdit}>Edit Passenger</button>
    <button onClick={onDelete}>Delete Passenger</button>
    </React.Fragment>
  )
}

export default PassengerDetails;
