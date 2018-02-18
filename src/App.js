import React, { Component } from 'react';
import './App.css';

//Components
import UserSideBar from './UserSideBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }
  render() {
    return (
      <div>
        <UserSideBar />
      </div>
    );
  }
}

export default App;
