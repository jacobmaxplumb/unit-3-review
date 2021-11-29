import {applyMiddleware, combineReducers, createStore} from 'redux';
import { todoReducer } from './todo.reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initalState = {
    title: ''
}

const sharedReducer = (state = initalState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const reducers = combineReducers({
    shared: sharedReducer,
    todo: todoReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));