import { combineReducers} from 'redux';
import { loadingBarReducer} from 'react-redux-loading'
import loggedInUserReducer from './LoggedInUser'
import usersReducer from "./Users"
import questionsReducer from "./Questions";

export default combineReducers({
    loadingBar: loadingBarReducer,
    loggedInUser: loggedInUserReducer,
    users: usersReducer,
    questions: questionsReducer
})