import {LOAD_USERS} from "../actions/Users";


export default function usersReducer(state = null, action){
    switch(action.type){
        case LOAD_USERS:
            return action.users;
        default:
            return state;
    }
}