import React, { Component } from 'react';
import './UserSideBar.css';

class UserSideBar extends Component {
    render(){
        const { users } = this.props;
        const Users = users.map((user, index) =>{
            return <li key={index}>{user}</li>
        })
        return (
            <div className="UserSideBar--container">
                <ul>
                    {Users}
                </ul> 
            </div>
        );
    }
}

export default UserSideBar;