import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from "./Login";


class Leaderboard extends Component {


    render() {

        const {users, loggedInUser} = this.props;

        if(!loggedInUser){
            return (
                <Login/>
            )
        }

        return (
            <div className="center">
                <h3>Most Active</h3>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <div className="leaderboardBox">
                                <img src={user.avatarURL}
                                     className="avatar"
                                />
                                <p>{user.name}</p>
                                <p>{user.questions.length} questions asked.</p>
                                <p>{Object.keys(user.answers).length} questions answered.</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


function mapStateToProps({users, loggedInUser}) {

    return {
        loggedInUser,
        users: Object.keys(users)
            .map(userKey => users[userKey])
            .sort((a, b) => (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length))
    }
}

export default connect(mapStateToProps)(Leaderboard);