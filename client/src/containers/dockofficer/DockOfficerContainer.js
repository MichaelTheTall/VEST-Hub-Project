import React, {Component} from 'react';
import DockOfficerList from '../../components/dockofficer/DockOfficerList.js';
import InspectionList from '../../components/inspection/InspectionList.js';
import Request from '../../helpers/request.js';

class DockOfficerContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      dockofficers: [],
      inspections: []
    }
  }

  componentDidMount(){
    let doRequest = new Request()
    doRequest.get('/dockOfficers').then((data) => {
      this.setState({dockofficers: data._embedded.dockOfficers})
    })
    let inRequest = new Request()
    inRequest.get('/inspections').then((data) => {
      this.setState({inspections: data._embedded.inspections})
    })
  }


  render(){
    return (
      <div>
        <DockOfficerList dockofficers = {this.state.dockofficers} />
        <InspectionList inspections = {this.state.inspections} />
      </div>
    )
  }
}

export default DockOfficerContainer;
