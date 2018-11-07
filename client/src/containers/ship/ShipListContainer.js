import React, {Component} from 'react';
import ShipList from '../../components/ship/ShipList.js';
import Request from '../../helpers/request.js';

class ShipListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {ships: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/ships').then((data) => {
      this.setState({ships: data._embedded.ships})
    })
  }


  render(){
    return (
     <ShipList ships = {this.state.ships} />
    )
  }
}

export default ShipListContainer;
