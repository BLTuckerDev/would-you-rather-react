import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionDetail from "./QuestionDetail";
import Question from "./Question";


//TODO If there is no logged in user they should be redirected to the login page
//TODO ask the user to sign in and show a 404 page if the question id does not exist
class QuestionPage extends Component {


    render() {

        const{question, loggedInUser} = this.props;

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
        question: questions[questionId],
        loggedInUser
    }
}

export default connect(mapStateToProps)(QuestionPage)