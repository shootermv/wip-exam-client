import React, { Component, PropTypes } from 'react';
import Users from './users/Users';
import Statuses from './statuses/Statuses';
import Search from './search/Search';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.handleUserSelected = this.handleUserSelected.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
    fetch(`${process.env.REACT_APP_API_URL}/app/users/?q=${term || ''}`).then(response=>response.json())
    .then(users => {
        this.setState({ users });
    });
  }
  

  handleSearch(term) {
    this.fetchUsers(term);
  }


  render () {
    return (
      <div className="container-fluid">
      
        <div className="col-md-12">

          <Search onSearch={(term) => this.handleSearch(term)}/> 

          <div className="row margin-up">
            <Users users={ this.state.users } userSelected={(user) => this.handleUserSelected(user)}/>
            <Statuses selectedUser={this.state.selectedUser}/>
          </div>

        </div>
      </div>
    );
  }
};
