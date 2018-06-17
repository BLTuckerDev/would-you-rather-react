import React, {Component} from 'react'
import {connect} from 'react-redux'

class QuestionDetail extends Component {

    render() {
        const {question, optionOneVotes, optionTwoVotes, totalVotes, loggedInUser} = this.props;

        return (
            <div className="center">
                <h2>Would you rather?</h2>
                <br/>
                <div className={(loggedInUser.answers[question.id] === "optionOne" ? "answerBox" : "questionBox")}>
                    <h3>{question.optionOne.text}</h3>
                    <p>{`${((optionOneVotes/totalVotes) * 100).toFixed(2)}% of votes`}</p>
                    <p>{`Total Votes: ${optionOneVotes}`}</p>
                </div>
                <br/>
                <h3>OR</h3>
                <br/>
                <div className={(loggedInUser.answers[question.id] === "optionTwo" ? "answerBox" : "questionBox")}>
                    <h3>{question.optionTwo.text}</h3>
                    <p>{`${((optionTwoVotes/totalVotes) * 100).toFixed(2)}% of votes`}</p>
                    <p>{`Total Votes: ${optionTwoVotes}`}</p>
                </div>
            </div>
        )
    }
}


function mapStateToProps({questions, users, loggedInUser}, props) {
    const {questionId} = props;

    const totalVotes = Object.keys(users)
        .map(userKey => users[userKey].answers)
        .filter(answers => answers[questionId])
        .length;

    const question = questions[questionId];
    return {
        loggedInUser,
        question,
        optionOneVotes: question.optionOne.votes.length,
        optionTwoVotes: question.optionTwo.votes.length,
        totalVotes,
    }
}


export default connect(mapStateToProps)(QuestionDetail);