import React, {Component} from 'react'
import {connect} from 'react-redux'


class Login extends Component {


    render() {

        const {users} = this.props;

        return (
            <div className="center">
                <h3>Please Select Your Account</h3>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <div className="loginBox">
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

    //TODO Replace with actual users from the store
    users = [
        {
            id: 'sarahedo',
            name: 'Sarah Edo',
            avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
            answers: {
                "8xf0y6ziyjabvozdd253nd": 'optionOne',
                "6ni6ok3ym7mf1p33lnez": 'optionOne',
                "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                "loxhs1bqm25b708cmbf3g": 'optionTwo'
            },
            questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
        },
        {
            id: 'tylermcginnis',
            name: 'Tyler McGinnis',
            avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
            answers: {
                "vthrdm985a262al8qx3do": 'optionOne',
                "xj352vofupe1dqz9emx13r": 'optionTwo',
            },
            questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
        },
        {
            id: 'johndoe',
            name: 'John Doe',
            avatarURL: 'https://tylermcginnis.com/would-you-rather/dan.jpg',
            answers: {
                "xj352vofupe1dqz9emx13r": 'optionOne',
                "vthrdm985a262al8qx3do": 'optionTwo',
                "6ni6ok3ym7mf1p33lnez": 'optionOne'
            },
            questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
        }
    ];

    return {
        users
    }
}

export default connect(mapStateToProps)(Login);