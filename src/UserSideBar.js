import React, { Component } from 'react';
import './UserSideBar.css';
import UserList from './UserList';




class UserSideBar extends Component {
    render(){
        const { users, selectedUser, onSelect, removeUser } = this.props;
        
        return (
            <div className="UserSideBar--container">
                <h1 className='UserSideBar--header'>GitHub Users</h1>
                <UserList 
                    users={users}
                    selectedUser={selectedUser}
                    onSelect={onSelect}
                    removeUser = {removeUser}/>
                <div className="UserSideBar--user-form">
                    <form onSubmit={(e) => this.props.addUser(e, this.props.username)}>
                        <input type="text" 
                            value={this.props.username} 
                            placeholder='GitHub Username'
                            onChange={e => this.props.updateUser(e)}/> 
                    </form> 
                </div>
            </div>
        );
    }
    
}

export default UserSideBar;