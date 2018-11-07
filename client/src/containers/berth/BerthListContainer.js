import React, {Component} from 'react';
import BerthList from '../../components/berth/BerthList.js';
import Request from '../../helpers/request.js';

class BerthListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      emptyberths: [],
      fullberths: []
    }
  }

  componentDidMount(){
    let emptyRequest = new Request()
    emptyRequest.get('/berths/empty').then((data) => {
      this.setState({emptyberths: data})
    })
    let fullRequest = new Request()
    fullRequest.get('/berths/full').then((data) => {
      this.setState({fullberths: data})
    })
  }


  render(){
    return (
      <div>
        <h4>Occupied Berths:</h4>
        <BerthList berths = {this.state.fullberths} />
        <h4>Free Berths:</h4>
        <BerthList berths = {this.state.emptyberths} />
      </div>
    )
  }
}

export default BerthListContainer;
