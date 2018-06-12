import React, {Component} from 'react'
import {connect} from 'react-redux'


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
                        <label for="option1">{question.optionOne.text}</label>

                        <h2>OR</h2>

                        <input checked={this.state.currentAnswer === question.optionTwo}
                               type="radio"
                               id="option2"
                               name="option2"
                               onChange={this.onAnswerChanged}
                               value="option2"/>
                        <label for="option2">{question.optionTwo.text}</label>
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

    //TODO Undo the comments and use real data when the store is hooked up
    // const {questionId} = props.match.params
    questions = {
        "8xf0y6ziyjabvozdd253nd": {
            id: '8xf0y6ziyjabvozdd253nd',
            author: 'sarahedo',
            timestamp: 1467166872634,
            optionOne: {
                votes: ['sarahedo'],
                text: 'have horrible short term memory',
            },
            optionTwo: {
                votes: [],
                text: 'have horrible long term memory'
            }
        },
        "6ni6ok3ym7mf1p33lnez": {
            id: '6ni6ok3ym7mf1p33lnez',
            author: 'johndoe',
            timestamp: 1468479767190,
            optionOne: {
                votes: [],
                text: 'become a superhero',
            },
            optionTwo: {
                votes: ['johndoe', 'sarahedo'],
                text: 'become a supervillian'
            }
        },
        "am8ehyc8byjqgar0jgpub9": {
            id: 'am8ehyc8byjqgar0jgpub9',
            author: 'sarahedo',
            timestamp: 1488579767190,
            optionOne: {
                votes: [],
                text: 'be telekinetic',
            },
            optionTwo: {
                votes: ['sarahedo'],
                text: 'be telepathic'
            }
        },
        "loxhs1bqm25b708cmbf3g": {
            id: 'loxhs1bqm25b708cmbf3g',
            author: 'tylermcginnis',
            timestamp: 1482579767190,
            optionOne: {
                votes: [],
                text: 'be a front-end developer',
            },
            optionTwo: {
                votes: ['sarahedo'],
                text: 'be a back-end developer'
            }
        },
        "vthrdm985a262al8qx3do": {
            id: 'vthrdm985a262al8qx3do',
            author: 'tylermcginnis',
            timestamp: 1489579767190,
            optionOne: {
                votes: ['tylermcginnis'],
                text: 'find $50 yourself',
            },
            optionTwo: {
                votes: ['johndoe'],
                text: 'have your best friend find $500'
            }
        },
        "xj352vofupe1dqz9emx13r": {
            id: 'xj352vofupe1dqz9emx13r',
            author: 'johndoe',
            timestamp: 1493579767190,
            optionOne: {
                votes: ['johndoe'],
                text: 'write JavaScript',
            },
            optionTwo: {
                votes: ['tylermcginnis'],
                text: 'write Swift'
            }
        },
    };

    //TODO replace with real questionId
    const questionId = "xj352vofupe1dqz9emx13r";

    const question = questions[questionId];

    return {
        question,
        loggedInUser,
    }
}

export default connect(mapStateToProps)(Question)