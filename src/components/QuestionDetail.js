import React, {Component} from 'react'
import {connect} from 'react-redux'

//TODO Show the option selected by the currently logged in user

class QuestionDetail extends Component {

    //TODO Handle 404 page here when question id is invalid

    render() {
        const {question, optionOneVotes, optionTwoVotes, totalVotes} = this.props;

        return (
            <div className="center">
                <h2>Would you rather?</h2>
                <br/>
                <div className="questionBox">
                    <h3>{question.optionOne.text}</h3>
                    <p>{`${(optionOneVotes/totalVotes) * 100}% of votes`}</p>
                    <p>{`Total Votes: ${optionOneVotes}`}</p>
                </div>
                <br/>
                <h3>OR</h3>
                <br/>
                <div className="questionBox">
                    <h3>{question.optionTwo.text}</h3>
                    <p>{`${(optionTwoVotes/totalVotes) * 100}% of votes`}</p>
                    <p>{`Total Votes: ${optionTwoVotes}`}</p>
                </div>
            </div>
        )
    }
}


function mapStateToProps({questions, users}, props) {
    const {questionId} = props;

    Object.keys(users)
        .forEach((user) => console.log(`user: ${user}`))

    const totalVotes = Object.keys(users)
        .map(userKey => users[userKey].answers)
        .filter(answers => answers[questionId])
        .length;

    console.log(`Total Votes: ${totalVotes}`);

    const question = questions[questionId]
    return {
        question,
        optionOneVotes: question.optionOne.votes.length,
        optionTwoVotes: question.optionTwo.votes.length,
        totalVotes,
    }
}


export default connect(mapStateToProps)(QuestionDetail);