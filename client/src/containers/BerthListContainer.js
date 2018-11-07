import React, {Component} from 'react';
import BerthList from '../components/BerthList.js';
import Request from '../helpers/request.js';

class BerthListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {berths: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/berths').then((data) => {
      this.setState({berths: data._embedded.berths})
    })
  }


  render(){
    return (
     <BerthList berths = {this.state.berths} />
    )
  }
}

export default BerthListContainer;
