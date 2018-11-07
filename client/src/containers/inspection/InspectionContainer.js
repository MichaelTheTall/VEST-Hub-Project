import React, {Component} from 'react';
import InspectionList from '../../components/inspection/InspectionList.js';
import Request from '../../helpers/request.js';

class InspectionContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      inspections: []
    }
  }

  componentDidMount(){
    let inRequest = new Request()
    inRequest.get('/inspections').then((data) => {
      this.setState({inspections: data._embedded.inspections})
    })
  }


  render(){
    return (
      <div>
        <InspectionList inspections = {this.state.inspections} />
      </div>
    )
  }
}

export default InspectionContainer;
