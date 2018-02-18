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
    }
    this.selectUser = this.selectUser.bind(this);
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
          onSelect={this.selectUser}/>
        <UserInformation info={this.state.userInfo}/>
      </div>
    );
  }
}

export default App;
