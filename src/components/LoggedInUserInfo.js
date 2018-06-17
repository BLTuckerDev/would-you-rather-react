import React, {Component} from 'react'
import {connect} from 'react-redux'


class LoggedInUserInfo extends Component {


    render() {

        const {loggedInUser} = this.props;

        return (
            <div>
                { loggedInUser && (<div className="LoggedInUserInfoBox">
                    <img src={loggedInUser.avatarURL}
                         className="smallAvatar"
                    />
                    <span>{loggedInUser.name}</span>
                </div>)}
            </div>
        )
    }
}


function mapStateToProps({loggedInUser}) {
    return {
        loggedInUser
    }
}


export default connect(mapStateToProps)(LoggedInUserInfo);