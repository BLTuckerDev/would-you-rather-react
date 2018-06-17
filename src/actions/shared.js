import {showLoading, hideLoading} from 'react-redux-loading'
import {loadUsers} from './Users'
import {_getQuestions, _getUsers} from "../utils/_DATA";
import {loadQuestions} from "./Questions";

export function loadInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([
            _getUsers(),
            _getQuestions()
        ])
            .then(([users, questions]) => ({
                users,
                questions
            }))
            .then(({users, questions}) => {
                dispatch(loadUsers(users));
                dispatch(loadQuestions(questions));
                dispatch(hideLoading());
            });
    }
}