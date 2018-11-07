import React, {Component} from 'react';
import Request from '../../helpers/request';
import DockOfficerForm from '../../components/dockofficer/DockOfficerForm.js'

class DockOfficerFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleDockOfficerPost = this.handleDockOfficerPost.bind(this);
  }

  handleDockOfficerPost(dockofficer){
    const request = new Request();
    request.post('/dockOfficers', dockofficer).then(() => {
      window.location = '/dockOfficers'
    })
  }

  render(){
    return <DockOfficerForm handleDockOfficerPost={this.handleDockOfficerPost} />
  }
}

export default DockOfficerFormContainer;
