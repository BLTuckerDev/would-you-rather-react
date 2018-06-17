import {ADD_QUESTION, LOAD_QUESTIONS} from "../actions/Questions";


export default function questionsReducer(state = null, action) {
    switch (action.type) {
        case LOAD_QUESTIONS:
            return action.questions;
        case ADD_QUESTION:
            const {question} = action;

            return{
                ...state,
                [question.id]: question
            };

        default:
            return state;
    }
}