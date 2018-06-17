import React, {Component} from 'react'
import {connect} from 'react-redux'


class Leaderboard extends Component {


    render() {

        const {users} = this.props


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


function mapStateToProps({users}) {

    return {
        users: users.sort((a, b) => (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length))
    }
}

export default connect(mapStateToProps)(Leaderboard);