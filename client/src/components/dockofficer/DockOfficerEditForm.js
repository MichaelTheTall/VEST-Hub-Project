import React, {Component} from 'react';

class DockOfficerEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.dockofficers.name
   }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleSubmit(event){
    event.preventDefault();
    const dockofficer = {
        "name": this.state.name
      }
    this.props.handleDockOfficerEdit(dockofficer)
  }


render(){

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value = {this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })}/>
        <button type="submit">Save</button>
      </form>
    </div>

)
}
  }

  export default DockOfficerEditForm;
