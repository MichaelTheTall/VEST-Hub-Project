import React, {Component} from 'react';
import DockOfficerList from '../components/DockOfficerList.js';
import Request from '../helpers/request.js';

class DockOfficerContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dockofficers: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/dockOfficers').then((data) => {
      this.setState({dockofficers: data._embedded.dockOfficers})
    })
  }


  render(){
    return (
     <DockOfficerList dockofficers = {this.state.dockofficers} />
    )
  }
}

export default DockOfficerContainer;
