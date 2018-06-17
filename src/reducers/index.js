import { combineReducers} from 'redux';
import { loadingBarReducer} from 'react-redux-loading'
import loggedInUserReducer from './LoggedInUser'

export default combineReducers({
    loadingBar: loadingBarReducer,
    loggedInUser: loggedInUserReducer
})