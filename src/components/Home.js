import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionDetail from "./QuestionDetail";
import Question from "./Question";
import {Redirect} from "react-router-dom";

//TODO ORder polls from most recently created to least recently created

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


    render() {

        const {currentTab} = this.state;
        const {loggedInUser, answeredQuestions, unansweredQuestions} = this.props;

        const questionsToDisplay = currentTab === "answered" ? answeredQuestions : unansweredQuestions;

        if(!loggedInUser){
            return <Redirect to="/login"/>
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
                            {questionsToDisplay === answeredQuestions ?
                                <QuestionDetail questionId={questionId}/> :
                                <Question questionId={questionId}/>}
                        </li>
                    ))}
                </ul>
            </div>
        )

    }
}


function mapStateToProps({questions, loggedInUser}) {

    if(!questions){
        questions = [];
    }

    const answeredQuestions = Object.keys(questions)
        .filter((questionId) => Object.keys(loggedInUser ? loggedInUser.answers : {}).includes(questionId));

    const unansweredQuestions = Object.keys(questions)
        .filter((questionId) => !Object.keys(loggedInUser ? loggedInUser.answers : {}).includes(questionId));

    console.log(`answered count: ${answeredQuestions}`);
    console.log(`unanswered count: ${unansweredQuestions}`);
    return {
        loggedInUser,
        answeredQuestions,
        unansweredQuestions
    }

}

export default connect(mapStateToProps)(Home);