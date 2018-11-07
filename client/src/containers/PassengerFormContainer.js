import React, {Component} from 'react';
import Request from '../helpers/request';
import PassengerForm from '../components/PassengerForm.js'

class PassengerFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {ships: []};
    this.handlePassengerPost = this.handlePassengerPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("ships").then((data) => {
      this.setState({ships: data._embedded.ships})
      });
    }
  

  handlePassengerPost(passenger){
    const request = new Request();
    request.post('/passengers', passenger).then(() => {
      window.location = '/passengers'
    })

    
  }

  render(){

    return <PassengerForm
      ships={this.state.ships}
      handlePassengerPost={this.handlePassengerPost} 
      
      />

  }
}

export default PassengerFormContainer;