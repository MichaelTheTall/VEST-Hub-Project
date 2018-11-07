import React, {Component} from 'react';
import Request from '../helpers/request';
import PassengerEditForm from '../components/PassengerEditForm'

class PassengerEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {ships: null, passenger: null};
    this.handlePassengerEdit = this.handlePassengerEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/ships").then((ships) => {
      this.setState({ships: ships._embedded.ships})
    });
    request.get("/passengers/" + this.props.id + "?projection=embedShip").then((passenger) => {
      this.setState({passenger: passenger})
    });
  }

  handlePassengerEdit(passenger){
    const request = new Request();
    request.patch('/passengers/' + this.props.id, passenger).then(() => {
      window.location = '/passengers/' + this.props.id
    })
  }

  render(){
    if(!this.state.ships || !this.state.passenger){
      return null;
    }
    return <PassengerEditForm ships = {this.state.ships} passenger={this.state.passenger} handlePassengerEdit= {this.handlePassengerEdit} />

  }
}

export default PassengerEditFormContainer;
