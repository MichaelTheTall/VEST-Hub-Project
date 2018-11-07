import React, {Component} from 'react';
import Inspection from '../../components/inspection/Inspection.js';
import InspectionDetails from '../../components/inspection/InspectionDetails.js';
import Request from '../../helpers/request.js';

class SingleInspectionContainer extends Component {
  constructor(props){
    super(props);
    this.state = {inspection: null}
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/inspections/' + this.props.id + '?projection=embedShip';
    request.get(url).then((data) => {
      this.setState({inspection: data})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/inspections/' + id;
    request.delete(url).then(() => {
      window.location = '/inspections'
    })
  }


  render(){
    if(!this.state.inspection){
      return null;
    }
    return (
      <div className="component">
       <Inspection inspection = {this.state.inspection} />
       <InspectionDetails inspection = {this.state.inspection} handleDelete = {this.handleDelete}/>
     </div>
    )

  }
}

export default SingleInspectionContainer;
