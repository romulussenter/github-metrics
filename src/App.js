import React, { Component } from 'react';
import './App.css';

//Components
import UserSideBar from './UserSideBar';
import UserInformation from './UserInformation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: ['justin1dennison', 'jd'],
      selectedUser: '',
    }
    this.selectUser = this.selectUser.bind(this);
  }

  selectUser(user){
    this.setState({
      selectedUser: user
    });
  }

  render() {
    return (
      <div className='App--container'>
        <UserSideBar
          selectedUser={this.state.selectedUser}
          users={this.state.users} 
          onSelect={this.selectUser}/>
        <UserInformation />
      </div>
    );
  }
}

export default App;
