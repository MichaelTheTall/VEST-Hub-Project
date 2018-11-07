import React, {Component} from 'react';
import Arrival from '../components/Arrival.js';
import Depart from '../components/Depart.js';
import Request from '../helpers/request.js';

class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
        arrivals: [],
        departures: []
    }
  }

  componentDidMount(){
    let arriveRequest = new Request()
    arriveRequest.get('/ships/arrivals').then((data) => {
      this.setState({arrivals: data._embedded.ships})
    })
    let departRequest = new Request()
    departRequest.get('/ships/departures').then((data) => {
      this.setState({departures: data._embedded.ships})
    })
  }


  render(){
    return (
    <div>
        <Arrival arrivals = {this.state.arrivals} />
        <Depart departures = {this.state.departures} />
    </div>
    )
  }
}

export default HomeContainer;
