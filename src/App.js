import React, { Component } from 'react';
import './App.css';

//Components
import UserSideBar from './UserSideBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: ['justin1dennison']
    }
  }
  render() {
    return (
      <div>
        <UserSideBar users={this.state.users}/>
      </div>
    );
  }
}

export default App;
