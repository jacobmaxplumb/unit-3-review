import { useEffect } from "react";
import { connect } from "react-redux";
import { getTodosAction } from "../actions/todo.actions";

const Todo = (props) => {
    useEffect(() => {
        props.getTodosAction()
    }, [])

    return (
        <div>
            <h1>Todo List</h1>
            {props.todos.map((todo, index) => (
                <p key={index}>{todo.description}</p>
            ))}
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos,
        todo: state.todo.todo
    }
}

export default connect(mapStateToProps, { getTodosAction })(Todo);