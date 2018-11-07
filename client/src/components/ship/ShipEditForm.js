import React, {Component} from 'react';

class ShipEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.ship.name,
      capacity: props.ship.capacity,
      origin: props.ship.origin,
      destination: props.ship.destination
   }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleSubmit(event){
    event.preventDefault();
    const ship = {
        "name": this.state.name,
        "capacity": this.state.capacity,
        "origin": this.state.origin,
        "destination": this.state.destination
      }
    this.props.handleShipEdit(ship)
  }


render(){

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value = {this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })}/>
        <input type="number" value = {this.state.capacity} name="capacity" onChange={e => this.setState({ capacity: e.target.value })}/>
        <input type="text" value = {this.state.origin} name="origin" onChange={e => this.setState({ origin: e.target.value })}/>
        <input type="text" value = {this.state.destination} name="destination" onChange={e => this.setState({ destination: e.target.value })}/>
        <button type="submit">Save</button>
      </form>
    </div>
)
}
  }

  export default ShipEditForm;
