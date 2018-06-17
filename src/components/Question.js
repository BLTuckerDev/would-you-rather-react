import React, {Component} from 'react'
import {connect} from 'react-redux'

//TODO Show picture of whoever asked the question


class Question extends Component {

    state = {
        currentAnswer: null,
    };

    onAnswerChanged = (e) => {
        console.log("onAnswerChanged");
        console.dir(e)
        this.setState({
            currentAnswer: e.target.value === "option1"
                ? this.props.question.optionOne
                : this.props.question.optionTwo
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {currentAnswer} = this.state;

        console.log("Answering question");

        //TODO Dispatch answering the question
        //TODO reset state? navigate away?

    };

    render() {

        const {question, loggedInUser} = this.props;

        return (
            <div className="center">
                <h2>Would you rather?</h2>
                <br/>
                <form className="question" onSubmit={this.handleSubmit}>
                    <div>
                        <input type="radio"
                               checked={this.state.currentAnswer === question.optionOne}
                               id="option1"
                               name="option1"
                               onChange={this.onAnswerChanged}
                               value="option1"/>
                        <label htmlFor="option1">{question.optionOne.text}</label>

                        <h2>OR</h2>

                        <input checked={this.state.currentAnswer === question.optionTwo}
                               type="radio"
                               id="option2"
                               name="option2"
                               onChange={this.onAnswerChanged}
                               value="option2"/>
                        <label htmlFor="option2">{question.optionTwo.text}</label>
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


function mapStateToProps({questions, loggedInUser}, props) {

    const {questionId} = props;

    return {
        question: questions[questionId],
        loggedInUser,
    }
}

export default connect(mapStateToProps)(Question)