import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAnsweringAQuestion} from "../actions/Questions";
import {withRouter} from "react-router-dom";

class Question extends Component {

    state = {
        currentAnswer: null,
    };

    onAnswerChanged = (e) => {
        this.setState({
            currentAnswer: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {currentAnswer} = this.state;
        const {question, history, dispatch} = this.props;

        dispatch(handleAnsweringAQuestion(question, currentAnswer));
        history.push("/")
    };

    render() {

        const {question, users} = this.props;

        return (
            <div className="center">
                <h2>Would you rather?</h2>
                <p>Asked By:</p>
                <img src={users[question.author].avatarURL}
                     className="smallAvatar"
                />
                <br/>
                <form className="question" onSubmit={this.handleSubmit}>
                    <div>
                        <input type="radio"
                               checked={this.state.currentAnswer === "optionOne"}
                               id="optionOne"
                               name="optionOne"
                               onChange={this.onAnswerChanged}
                               value="optionOne"/>
                        <label htmlFor="optionOne">{question.optionOne.text}</label>

                        <h2>OR</h2>

                        <input checked={this.state.currentAnswer === "optionTwo"}
                               type="radio"
                               id="optionTwo"
                               name="optionTwo"
                               onChange={this.onAnswerChanged}
                               value="optionTwo"/>
                        <label htmlFor="optionTwo">{question.optionTwo.text}</label>
                    </div>

                    <button className="btn"
                            type="submit"
                            disabled={!this.state.currentAnswer}>
                        Submit
                    </button>
                </form>

            </div>
        )
    }

}


function mapStateToProps({questions, users}, props) {

    const {questionId} = props;

    return {
        question: questions[questionId],
        users
    }
}

export default withRouter(connect(mapStateToProps)(Question));