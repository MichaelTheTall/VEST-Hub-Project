import React, {Component} from 'react';

class PassengerEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.passenger.name,
      ship: props.passenger.ship
   }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleSubmit(event){
    event.preventDefault();
    const passenger = {
        "name": this.state.name,
        "ship": this.state.ship
      }
    this.props.handlePassengerEdit(passenger)
  }


render(){
     const shipOptions = this.props.ships.map((ship, index) => {
      return <option key={index} value={ship._links.self.href}>{ship.name}</option>
    })

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value = {this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })}/>
        <select name="ship" onChange={e => this.setState({ ship: e.target.value })}>
          {shipOptions}
        </select>
        <button type="submit">Save</button>
      </form>
    </div>

)
}
  }

  export default PassengerEditForm;
