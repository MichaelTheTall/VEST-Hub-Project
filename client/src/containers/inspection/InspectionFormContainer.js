import React, {Component} from 'react';
import Request from '../../helpers/request';
import InspectionForm from '../../components/inspection/InspectionForm.js'

class InspectionFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleInspectionPost = this.handleInspectionPost.bind(this);
  }

  handleInspectionPost(inspection){
    const request = new Request();
    request.post('/inspections', inspection).then(() => {
      window.location = '/inspections'
    })
  }

  render(){
    return <InspectionForm handleInspectionPost={this.handleInspectionPost} />
  }
}

export default InspectionFormContainer;