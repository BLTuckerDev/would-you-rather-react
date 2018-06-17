import {loadUsers} from "./Users";
import {hideLoading, showLoading} from "react-redux-loading";
import {setLoggedInUser} from "./LoggedInUser";
import {_saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";

export const LOAD_QUESTIONS = "loadQuestions";
export const ANSWER_QUESTION = "answerQuestion";
export const ADD_QUESTION = "addQuestion";

export function loadQuestions(questions) {
    return {
        type: LOAD_QUESTIONS,
        questions
    }
}

export function answerQuestion(question) {
    return {
        type: ANSWER_QUESTION,
        question
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }

}

export function handleAnsweringAQuestion(question, option) {
    return (dispatch, getState) => {
        const {loggedInUser} = getState();

        dispatch(showLoading());
        return _saveQuestionAnswer({
            authedUser: loggedInUser.id,
            qid: question.id,
            answer: option
        })
            .then(({questions, users}) => {
                dispatch(setLoggedInUser(users[loggedInUser.id]));
                dispatch(loadUsers(users));
                dispatch(loadQuestions(questions));
                dispatch(hideLoading());
            });
    }
}

export function handleAddingNewQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {loggedInUser} = getState();

        dispatch(showLoading());
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: loggedInUser.id
        })
            .then(({formattedQuestion, users}) => {
                dispatch(setLoggedInUser(users[loggedInUser.id]));
                dispatch(loadUsers(users));
                dispatch(addQuestion(formattedQuestion));
                dispatch(hideLoading());
            });
    }
}