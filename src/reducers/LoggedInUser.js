import {SET_LOGGED_IN_USER} from "../actions/LoggedInUser";


export default function loggedInUserReducer(state = null, action){
    switch(action.type){
        case SET_LOGGED_IN_USER:
            return action.user;
        default:
            return state;
    }
}