import React, { Component, PropTypes } from 'react';
import Users from './users/Users';
import Statuses from './statuses/Statuses';


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleUserSelected = this.handleUserSelected.bind(this);
  }


  state = {
    users: [],
    selectedUser: null
  }

  componentDidMount() {
   this.fetchUsers();
  }

  handleUserSelected(selectedUser) {
    this.setState({ selectedUser });
  }


  fetchUsers(term) {

    this.setState({ selectedUser: null, users:[] });
    fetch(`http://localhost:8000/app/users/?q=${term || ''}`).then(response=>response.json())
    .then(users => {
        this.setState({ users });
    });
  }
  

  handleClick(e) {
    this.fetchUsers(this.textInput.current.value);
  }


  render () {
    return (
      <div className="container-fluid">
        <div className="col-md-12">
          <div className="input-group col-md-12">
            <input className="form-control py-2" type="search" placeholder="search" ref={this.textInput}/>
            <span className="input-group-append">
              <button className="btn btn-outline-secondary" onClick={this.handleClick} type="button">
                  <i className="fa fa-search"></i>
              </button>
            </span>
          </div>

          <div className="row margin-up">
            <Users users={ this.state.users } userSelected={(user) => this.handleUserSelected(user)}/>
            <Statuses selectedUser={this.state.selectedUser}/>
          </div>
        </div>
      </div>
    );
  }
};
