import React, { Component } from 'react';
import Login from "./Login"
import QuestionDetail from "./QuestionDetail";
import Leaderboard from "./Leaderboard";
import Question from "./Question";
import LoggedInUserInfo from "./LoggedInUserInfo";

class App extends Component {
  render() {
    return (
        <LoggedInUserInfo/>
    );
  }
}

export default App;
