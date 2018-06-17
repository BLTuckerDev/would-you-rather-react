import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Login from "./Login"
import QuestionDetail from "./QuestionDetail";
import Leaderboard from "./Leaderboard";
import Question from "./Question";
import LoggedInUserInfo from "./LoggedInUserInfo";
import Navigation from "./Navigation";
import AddQuestion from "./AddQuestion";
import Home from "./Home";
import QuestionPage from "./QuestionPage";

//TODO Review rubric one more time

class App extends Component {
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
                          </div>}

                  </div>
              </Fragment>
          </Router>
      );
  }
}

function mapStateToProps({loggedInUser}) {

  //TODO determine loading based on actual data loading status
    return {
        loading: false
    }

}


//to get access to dispatch we need to make sure we use connect. from react-redux
export default connect(mapStateToProps)(App);
