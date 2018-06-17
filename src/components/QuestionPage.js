import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionDetail from "./QuestionDetail";
import Question from "./Question";
import {Redirect} from "react-router-dom";

class QuestionPage extends Component {


    render() {

        const{question, loggedInUser} = this.props;

        if(!loggedInUser){
            return <Redirect to="/login"/>
        }

        if(!question){
            return (
                <div>
                    404 Question Not Found
                </div>
            )
        }


        let isAnswered = Object.keys(loggedInUser.answers).includes(question.id);

        return(
            <div className="center">
                {isAnswered ?
                <QuestionDetail questionId={question.id} /> :
                <Question questionId={question.id} />}
            </div>
        )
    }
}

function mapStateToProps({questions, loggedInUser}, props){

    const {questionId} = props.match.params;

    return{
        question: questions ? questions[questionId] : null,
        loggedInUser
    }
}

export default connect(mapStateToProps)(QuestionPage)