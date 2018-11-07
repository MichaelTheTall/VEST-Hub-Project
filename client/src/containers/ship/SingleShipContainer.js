import React, {Component} from 'react';
import Ship from '../../components/ship/Ship.js';
import ShipDetails from '../../components/ship/ShipDetails.js';
import Request from '../../helpers/request.js';

class SingleShipContainer extends Component {
  constructor(props){
    super(props);
    this.state = {ship: null}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit= this.handleEdit.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/ships/' + this.props.id;
    request.get(url).then((data) => {
      this.setState({ship: data})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/ships/' + id;
    request.delete(url).then(() => {
      window.location = '/ships'
    })
  }

  handleEdit(id){
    window.location = '/ships/edit/' + id
  }


  render(){
    if(!this.state.ship){
      return null;
    }
    return (
      <div className="component">
       <Ship ship = {this.state.ship} />
       <ShipDetails ship = {this.state.ship} handleDelete = {this.handleDelete} handleEdit={this.handleEdit}/>
     </div>
    )

  }
}

export default SingleShipContainer;
