import React  from 'react';

const InspectionDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.inspections.id);
  }

  const onEdit = () => {
    props.handleEdit(props.inspections.id)
  }

  return (
    <React.Fragment>
    <button onClick={onDelete}>Delete Inspection</button>
    </React.Fragment>
  )
}

export default InspectionDetails;
