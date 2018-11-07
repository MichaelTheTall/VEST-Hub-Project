import React, {Component} from 'react';
import Request from '../../helpers/request';
import DockOfficerEditForm from '../../components/dockofficer/DockOfficerEditForm'

class DockOfficerEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dockofficers: null};
    this.handleDockOfficerEdit = this.handleDockOfficerEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/dockOfficers/" + this.props.id).then((dockofficers) => {
      this.setState({dockofficers: dockofficers})
    });
  }

  handleDockOfficerEdit(dockofficers){
    const request = new Request();
    request.patch('/dockOfficers/' + this.props.id, dockofficers).then(() => {
      window.location = '/dockOfficers/' + this.props.id
    })
  }

  render(){
    if(!this.state.dockofficers){
      return null;
    }
    return <DockOfficerEditForm dockofficers = {this.state.dockofficers}
    handleDockOfficerEdit= {this.handleDockOfficerEdit} />

  }
}

export default DockOfficerEditFormContainer;
