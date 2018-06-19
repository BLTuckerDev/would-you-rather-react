import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionDetail from "./QuestionDetail";
import Question from "./Question";
import Login from "./Login";

class Home extends Component {

    state = {
        currentTab: "unanswered",
    };

    showAnsweredQuestions = (e) => {
        this.setState(() => ({
            currentTab: "answered"
        }))
    };

    showUnansweredQuestions = (e) => {
        this.setState(() => ({
            currentTab: "unanswered"
        }))
    };

    handleOnQuestionClick = (e, questionId) => {
        e.preventDefault();
        const {history} = this.props;
        history.push(`/questions/${questionId}`)
    };

    render() {

        const {currentTab} = this.state;
        const {loggedInUser, answeredQuestions, unansweredQuestions} = this.props;

        const questionsToDisplay = currentTab === "answered" ? answeredQuestions : unansweredQuestions;

        if (!loggedInUser) {
            return (
                <Login/>
            )
        }


        return (
            <div className="center">
                <div className="tab">
                    <button className={currentTab === "unanswered" ? "active" : null}
                            onClick={this.showUnansweredQuestions}>Unanswered Questions
                    </button>
                    <button className={currentTab === "answered" ? "active" : null}
                            onClick={this.showAnsweredQuestions}>Answered Questions
                    </button>
                </div>
                <br/>
                <ul className="center">
                    {questionsToDisplay.map((questionId) => (
                        <li key={questionId}>
                            <div onClick={(e) => this.handleOnQuestionClick(e, questionId)}>
                                {questionsToDisplay === answeredQuestions ?
                                    <QuestionDetail questionId={questionId}/> :
                                    <Question questionId={questionId}/>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )

    }
}


function mapStateToProps({questions, loggedInUser}) {

    if (!questions) {
        questions = [];
    }

    const answeredQuestions = Object.keys(questions)
        .filter((questionId) => Object.keys(loggedInUser ? loggedInUser.answers : {}).includes(questionId))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    const unansweredQuestions = Object.keys(questions)
        .filter((questionId) => !Object.keys(loggedInUser ? loggedInUser.answers : {}).includes(questionId))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {
        loggedInUser,
        answeredQuestions,
        unansweredQuestions
    }

}

export default connect(mapStateToProps)(Home);