import React, { Component } from 'react';
import './App.css';

//Components
import UserSideBar from './UserSideBar';
import UserInformation from './UserInformation';

//utilities
import { getUserInformation } from './services/github';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: ['justin1dennison', 'jd'],
      selectedUser: '',
      userInfo: null, 
      userToAdd: ''
    }
    this.selectUser = this.selectUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  } 
  addUser(e, username){
    e.preventDefault();
    const { users } = this.state;
    const newUserState = [ 
      ...users,
      username
    ]; 
    this.setState({
      users: newUserState,
      userToAdd: ''
    });
  }
  updateUser(e){
    const val = e.target.value;
    this.setState({
      userToAdd: val
    });
  }
  removeUser(username){
    const { users } = this.state;
    const index = users.indexOf(username);
    const fisrt = users.slice(0, index);
    const last =users.slice(index +1);
    const newUsers =[
      ...fisrt,
      ...last
  
  ]
  
    this.setState({
      users: newUsers
    });
    //finish the remove user portion
  }
  selectUser(user){
    getUserInformation(user)
      .then(response => {
        this.setState({
          selectedUser: user,
          userInfo: response.data
        });
      })
  }

  render() {
    return (
      <div className='App--container'>
        <UserSideBar
          selectedUser={this.state.selectedUser}
          users={this.state.users} 
          onSelect={this.selectUser}
          updateUser={this.updateUser}
          addUser={this.addUser}
          removeUser={this.removeUser}
          username={this.state.userToAdd}/>
        <UserInformation info={this.state.userInfo}/>
      </div>
    );
  }
}

export default App;
