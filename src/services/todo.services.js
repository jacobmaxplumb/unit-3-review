import { axiosWithAuth } from "./axiosWithAuth"

export const getTodos = () => {
    return axiosWithAuth().get('http://localhost:8080/todos')
}

export const addTodo = (todo) => {
    return axiosWithAuth().post('http://localhost:8080/todos', todo);
}

export const updateTodo = (todo) => {
    return axiosWithAuth().put(`http://localhost:8080/todos/${todo.id}`, todo);
}

export const deleteTodo = (id) => {
    return axiosWithAuth().delete(`http://localhost:8080/todos/${id}`);
}