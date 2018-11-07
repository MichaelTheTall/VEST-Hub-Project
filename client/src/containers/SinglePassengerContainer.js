import React, {Component} from 'react';
import Passenger from '../components/Passenger.js';
import PassengerDetails from '../components/PassengerDetails.js';
import Request from '../helpers/request.js';

class SinglePassengerContainer extends Component {
  constructor(props){
    super(props);
    this.state = {passenger: null}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit= this.handleEdit.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/passengers/' + this.props.id + '?projection=embedShip';
    request.get(url).then((data) => {
      this.setState({passenger: data})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/passengers/' + id;
    request.delete(url).then(() => {
      window.location = '/passengers'
    })
  }

  handleEdit(id){
    window.location = '/passengers/edit/' + id
  }


  render(){
    if(!this.state.passenger){
      return null;
    }
    return (
      <div className="component">
       <Passenger passenger = {this.state.passenger} />
       <PassengerDetails passenger = {this.state.passenger} handleDelete = {this.handleDelete} handleEdit={this.handleEdit}/>
     </div>
    )

  }
}

export default SinglePassengerContainer;
