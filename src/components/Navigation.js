import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Leaderboard from "./Leaderboard";
import LoggedInUserInfo from "./LoggedInUserInfo";


class Navigation extends Component {

    loginOrOutButtonClick = (e) => {
        e.preventDefault();

        //TODO
        //decide whether we are logging in or out based on props
    }

    render() {
        const {loggedInUser} = this.props;

        var navItem = {
            marginTop: "12px",
        };

        return (

            <nav className='nav'>

                <ul>
                    <li>
                        <LoggedInUserInfo/>
                    </li>
                    <li style={navItem}>
                        <NavLink to='/'
                                 exact
                                 activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li style={navItem}>
                        <NavLink to='/add'
                                 activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li style={navItem}>
                        <NavLink to='/leaderboard'
                                 exact
                                 activeClassName='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li style={navItem} onClick={this.loginOrOutButtonClick} >
                        {loggedInUser == null ? "Login" : "Logout"}
                    </li>
                </ul>
            </nav>
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


export default connect(mapStateToProps)(Navigation);