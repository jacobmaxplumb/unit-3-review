import { GET_TODOS } from "../actions/todo.actions";

const initialState = {
    todos: [],
    todo: ''
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TODOS:
            return {...state, todos: action.todos}
        default:
            return state;
    }
}