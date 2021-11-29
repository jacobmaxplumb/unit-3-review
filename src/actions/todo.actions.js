import {getTodos} from '../services/todo.services'

export const ADD_TODO = 'Add Todo';
export const GET_TODOS = 'Get Todos';
export const UPDATE_TODO = 'Update Todo';
export const DELETE_TODO = 'Delete Todo';

export const getTodosAction = () => dispatch => {
    getTodos().then(res => {
        dispatch(getTodosSuccess(res.data))
    })
}

const addTodoSuccess = (todo) => {
    return {type: ADD_TODO, todo}
}

const getTodosSuccess = (todos) => {
    console.log(todos);
    return {type: GET_TODOS, todos}
}