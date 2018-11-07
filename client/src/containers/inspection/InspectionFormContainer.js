import React, {Component} from 'react';
import Request from '../../helpers/request';
import InspectionForm from '../../components/inspection/InspectionForm.js'

class InspectionFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {ships: [], doffs: []};
    this.handleInspectionPost = this.handleInspectionPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/ships").then((data) => {
      this.setState({ships: data._embedded.ships})
    }).then(() => {
      request.get('/dockOfficers').then((data) => {
        this.setState({doffs: data._embedded.dockOfficers})
      });
    });
  }

  handleInspectionPost(inspection){
    const request = new Request();
    request.post('/inspections', inspection).then(() => {
      window.location = '/inspections'
    })
  }

  render(){
    return <InspectionForm
            ships={this.state.ships}
            doffs={this.state.doffs}
            handleInspectionPost={this.handleInspectionPost} />
  }
}

export default InspectionFormContainer;