import {LOAD_QUESTIONS} from "../actions/Questions";


export default function questionsReducer(state = null, action) {
    switch (action.type) {
        case LOAD_QUESTIONS:
            return action.questions;
        default:
            return state;
    }
}