export const LOAD_QUESTIONS = "loadQuestions";



export function loadQuestions(questions){
    return {
        type: LOAD_QUESTIONS,
        questions
    }
}