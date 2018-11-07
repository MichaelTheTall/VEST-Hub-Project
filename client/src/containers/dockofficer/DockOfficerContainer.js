import React, {Component} from 'react';
import DockOfficerList from '../../components/dockofficer/DockOfficerList.js';
import Request from '../../helpers/request.js';

class DockOfficerContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      dockofficers: []
    }
  }

  componentDidMount(){
    let doRequest = new Request()
    doRequest.get('/dockOfficers').then((data) => {
      this.setState({dockofficers: data._embedded.dockOfficers})
    })
  }


  render(){
    return (
      <div>
        <DockOfficerList dockofficers = {this.state.dockofficers} />
      </div>
    )
  }
}

export default DockOfficerContainer;
