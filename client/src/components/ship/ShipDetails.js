import React  from 'react';

const ShipDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.ship.id);
  }

  const onEdit = () => {
    props.handleEdit(props.ship.id)
  }

  return (
    <React.Fragment>
    <button onClick={onEdit}>Edit Ship</button>
    <button onClick={onDelete}>Delete Ship</button>
    </React.Fragment>
  )
}

export default ShipDetails;
