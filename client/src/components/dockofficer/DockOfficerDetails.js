import React  from 'react';

const DockOfficerDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.dockofficer.id);
  }

  const onEdit = () => {
    props.handleEdit(props.dockofficer.id)
  }

  return (
    <React.Fragment>
    <button onClick={onEdit}>Edit Dock Officer</button>
    <button onClick={onDelete}>Delete Dock Officer</button>
    </React.Fragment>
  )
}

export default DockOfficerDetails;
