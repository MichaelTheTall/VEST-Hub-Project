import React, {Component} from 'react';
import Request from '../../helpers/request';
import ShipForm from '../../components/ship/ShipForm.js'

class ShipFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleShipPost = this.handleShipPost.bind(this);
  }

  handleShipPost(ship){
    const request = new Request();
    request.post('/ships', ship).then(() => {
      window.location = '/ships'
    })
  }

  render(){
    return <ShipForm handleShipPost={this.handleShipPost} />
  }
}

export default ShipFormContainer;