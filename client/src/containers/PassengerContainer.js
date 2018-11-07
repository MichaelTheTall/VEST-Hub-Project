import React, {Component} from 'react';
import PassengerList from '../components/passenger/PassengerList.js';
import Request from '../helpers/request.js';

class PassengerListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {passengers: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/passengers').then((data) => {
      this.setState({passengers: data._embedded.passengers})
    })
  }


  render(){
    return (
     <PassengerList passengers = {this.state.passengers} />
    )
  }
}

export default PassengerListContainer;
