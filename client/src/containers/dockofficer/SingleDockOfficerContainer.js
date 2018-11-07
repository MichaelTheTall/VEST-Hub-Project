import React, {Component} from 'react';
import DockOfficer from '../../components/dockofficer/DockOfficer.js';
import DockOfficerDetails from '../../components/dockofficer/DockOfficerDetails.js';
import Request from '../../helpers/request.js';

class SingleDockOfficerContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dockofficer: null}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit= this.handleEdit.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/dockOfficers/' + this.props.id;
    request.get(url).then((data) => {
      this.setState({dockofficer: data})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/dockOfficers/' + id;
    request.delete(url).then(() => {
      window.location = '/dockOfficers'
    })
  }

  handleEdit(id){
    window.location = '/dockOfficers/edit/' + id
  }


  render(){
    if(!this.state.dockofficer){
      return null;
    }
    return (
      <div className="component">
       <DockOfficer dockofficer = {this.state.dockofficer} />
       <DockOfficerDetails dockofficer = {this.state.dockofficer} handleDelete = {this.handleDelete} handleEdit={this.handleEdit}/>
     </div>
    )

  }
}

export default SingleDockOfficerContainer;
