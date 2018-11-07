import React, {Component} from 'react';
import Request from '../../helpers/request';
import ShipEditForm from '../../components/ship/ShipEditForm'

class ShipEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {ship: null};
    this.handleShipEdit = this.handleShipEdit.bind(this);
  }

  handleShipEdit(ship){
    const request = new Request();
    request.patch('/ships/' + this.props.id, ship).then(() => {
      window.location = '/ships/' + this.props.id
    })
  }

  render(){
    if(!this.state.ship){
      return null;
    }
    return <ShipEditForm ship = {this.state.ship} handleShipEdit= {this.handleShipEdit} />

  }
}

export default ShipEditFormContainer;
