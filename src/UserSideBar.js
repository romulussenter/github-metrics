import React, { Component } from 'react';
import './UserSideBar.css';

class UserSideBar extends Component {
    render(){
        const { users, selectedUser, onSelect } = this.props;
        const Users = users.map((user, index) =>{
            const classes = selectedUser === user ? 
                            'UserSideBar--list-item active' : 
                            'UserSideBar--list-item';
            return (<li key={index} 
                        className={classes}
                        >
                        <button onClick={() => onSelect(user)}>
                            {user}
                        </button>
                    </li>);
        })
        return (
            <div className="UserSideBar--container">
                <h1 className='UserSideBar--header'>GitHub Users</h1>
                <ul className='UserSideBar--list'>
                    {Users}
                </ul> 
            </div>
        );
    }
}

export default UserSideBar;