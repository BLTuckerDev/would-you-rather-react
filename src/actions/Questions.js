import {loadUsers} from "./Users";
import {hideLoading, showLoading} from "react-redux-loading";
import {setLoggedInUser} from "./LoggedInUser";

export const LOAD_QUESTIONS = "loadQuestions";
export const ANSWER_QUESTION = "answerQuestion";


export function loadQuestions(questions){
    return {
        type: LOAD_QUESTIONS,
        questions
    }
}

export function answerQuestion(question){
    return {
        type: ANSWER_QUESTION,
        question
    }
}


export function handleAnsweringAQuestion(question, option){
    return (dispatch, getState) => {
        const {loggedInUser} = getState();

        dispatch(showLoading());
        return _saveQuestionAnswer({
            authedUser: loggedInUser.id,
            qid: question.id,
            answer: option
        })
            .then(({questions, users}) => {
                dispatch(setLoggedInUser(users[loggedInUser.id]))
                dispatch(loadUsers(users));
                dispatch(loadQuestions(questions));
                dispatch(hideLoading());
            });
    }
}