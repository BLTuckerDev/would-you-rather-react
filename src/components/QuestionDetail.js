import React, {Component} from 'react'
import {connect} from 'react-redux'


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

    //TODO remove when store actions are wired up
    users = {
        sarahedo: {
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
        },
        tylermcginnis: {
            id: 'tylermcginnis',
            name: 'Tyler McGinnis',
            avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
            answers: {
                "vthrdm985a262al8qx3do": 'optionOne',
                "xj352vofupe1dqz9emx13r": 'optionTwo',
            },
            questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
        },
        johndoe: {
            id: 'johndoe',
            name: 'John Doe',
            avatarURL: 'https://tylermcginnis.com/would-you-rather/dan.jpg',
            answers: {
                "xj352vofupe1dqz9emx13r": 'optionOne',
                "vthrdm985a262al8qx3do": 'optionTwo',
                "6ni6ok3ym7mf1p33lnez": 'optionOne'
            },
            questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
        }
    }

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
    }

    //const {questionId} = props.match.params
    //const question = questions[questionId];

    const questionId = "xj352vofupe1dqz9emx13r";

    Object.keys(users)
        .forEach((user) => console.log(`user: ${user}`))

    const totalVotes = Object.keys(users)
        .map(userKey => users[userKey].answers)
        .filter(answers => answers[questionId])
        .length;

    console.log(`Total Votes: ${totalVotes}`);

    //TODO replace with real question
    let question = {
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
    };


    return {
        question,
        optionOneVotes: question.optionOne.votes.length,
        optionTwoVotes: question.optionTwo.votes.length,
        totalVotes,
    }
}


export default connect(mapStateToProps)(QuestionDetail);