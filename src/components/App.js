import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Login from "./Login"
import Leaderboard from "./Leaderboard";
import Navigation from "./Navigation";
import AddQuestion from "./AddQuestion";
import Home from "./Home";
import QuestionPage from "./QuestionPage";
import {loadInitialData} from "../actions/shared";

//TODO Review rubric one more time

class App extends Component {

    componentDidMount() {
        //send the handle initial data load action
        this.props.dispatch(loadInitialData());
    }

    render() {

        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    <div className="container">

                        <Navigation/>


                        {this.props.loading === true
                            ? null
                            : <div>
                                <Route path="/" exact component={Home}/>
                                <Route path="/leaderboard" component={Leaderboard}/>
                                <Route path="/add" component={AddQuestion}/>
                                <Route path="/questions/:questionId" component={QuestionPage}/>
                                <Route path="/login" component={Login}/>
                            </div>}

                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({users}) {

    return {
        loading: users == null
    }

}


export default connect(mapStateToProps)(App);
