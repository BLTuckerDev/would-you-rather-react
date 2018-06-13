import React, {Component} from 'react'
import {connect} from 'react-redux'


class LoggedInUserInfo extends Component {


    render() {

        const {loggedInUser} = this.props;

        return (
            <div className="LoggedInUserInfoBox">
                <img src={loggedInUser.avatarURL}
                     className="smallAvatar"
                />
                <span>{loggedInUser.name}</span>
            </div>
        )
    }
}


function mapStateToProps({loggedInUser}) {
    //TODO Replace with real user when connected

    loggedInUser = {
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
    };

    return {
        loggedInUser
    }
}


export default connect(mapStateToProps)(LoggedInUserInfo);