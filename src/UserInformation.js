import React, { Component } from 'react';
import './UserInformation.css';

class UserInformation extends Component {
    render(){
        const { info } = this.props;
        return (
            <div className="UserInformation--container">
                <pre>
                    {JSON.stringify(info, null, 4)} 
                </pre>
            </div>
        )
    }
}

export default UserInformation;