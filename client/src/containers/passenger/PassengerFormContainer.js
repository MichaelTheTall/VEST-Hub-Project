import React, {Component} from 'react';
import Request from '../../helpers/request';
import PassengerForm from '../../components/passenger/PassengerForm.js'

class PassengerFormContainer extends Component {
  constructor(props){
    super(props);
    this.handlePassengerPost = this.handlePassengerPost.bind(this);
  }

  handlePassengerPost(passenger){
    const request = new Request();
    request.post('/passengers', passenger).then(() => {
      window.location = '/passengers'
    })
  }

  render(){
    return <PassengerForm handlePassengerPost={this.handlePassengerPost} />
  }
}

export default PassengerFormContainer;