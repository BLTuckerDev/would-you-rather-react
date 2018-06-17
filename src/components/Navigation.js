import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'
import LoggedInUserInfo from "./LoggedInUserInfo";
import {setLoggedInUser} from "../actions/LoggedInUser";


class Navigation extends Component {

    loginOrOutButtonClick = (e) => {
        e.preventDefault();

        const {loggedInUser, history, dispatch} = this.props;

        if(loggedInUser){
            dispatch(setLoggedInUser(null));
        }

        history.push("/login");
    };

    render() {
        const {loggedInUser} = this.props;

        var navItem = {
            marginTop: "12px",
        };

        return (

            <nav className='nav'>

                <ul>
                    {loggedInUser && (<li>
                        <LoggedInUserInfo/>
                    </li>)}
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

    return {
        loggedInUser
    }
}


export default withRouter(connect(mapStateToProps)(Navigation));