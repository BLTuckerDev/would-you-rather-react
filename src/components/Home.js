import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionDetail from "./QuestionDetail";
import Question from "./Question";

//TODO ORder polls from most recently created to least recently created

class Home extends Component {

    state = {
        currentTab: "unanswered",
    }

    showAnsweredQuestions = (e) => {
        this.setState(() => ({
            currentTab: "answered"
        }))
    }

    showUnansweredQuestions = (e) => {
        this.setState(() => ({
            currentTab: "unanswered"
        }))
    }


    render() {

        const {currentTab} = this.state;
        const {answeredQuestions, unansweredQuestions} = this.props;

        const questionsToDisplay = currentTab === "answered" ? answeredQuestions : unansweredQuestions;

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

    //TODO replace with real questions
    //TODO replace with real loggedInUser

    loggedInUser = {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionOne',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    };

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

    const answeredQuestions = Object.keys(questions)
        .filter((questionId) => Object.keys(loggedInUser.answers).includes(questionId));

    const unansweredQuestions = Object.keys(questions)
        .filter((questionId) => !Object.keys(loggedInUser.answers).includes(questionId));

    console.log(`answered count: ${answeredQuestions}`);
    console.log(`unanswered count: ${unansweredQuestions}`);
    return {
        answeredQuestions,
        unansweredQuestions
    }

}

export default connect(mapStateToProps)(Home);