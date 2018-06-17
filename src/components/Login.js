import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setLoggedInUser} from "../actions/LoggedInUser";


class Login extends Component {

    handleLoginClick = (user) => {

        const {dispatch, history} = this.props;

        dispatch(setLoggedInUser(user));

        history.push("/");
    };


    render() {

        const {users} = this.props;

        return (
            <div className="center">
                <h3>Please Select Your Account</h3>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <div className="loginBox" onClick={(e) => this.handleLoginClick(user)}>
                                <img src={user.avatarURL}
                                     className="avatar"
                                />
                                <p>{user.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    if(!users){
        users = [];
    } else {
        users = Object.keys(users).map(userKey => users[userKey]);
    }

    return {
        users
    }
}

export default connect(mapStateToProps)(Login);