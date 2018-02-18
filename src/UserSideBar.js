import React, { Component } from 'react';
import './UserSideBar.css';

class UserSideBar extends Component {
    render(){
        const { users } = this.props;
        const Users = users.map((user, index) =>{
            return (<li key={index} className='UserSideBar--list-item'>
                        <button>
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