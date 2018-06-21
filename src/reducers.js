import { combineReducers } from 'redux';
import { persistentReducer } from 'redux-pouchdb-plus';

import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    SET_LOGGED_IN
} from './actionTypes';

import { VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
    case SET_VISIBILITY_FILTER:
	return action.filter;
    default:
	return state;
    }
}

function login(state = false, action) {
    switch (action.type) {
    case SET_LOGGED_IN:
	return action.loggedIn;
    default:
	return state;
    }
}

let nextTodoId = 0;

function todos(state = [], action) {
    switch (action.type) {
    case ADD_TODO:
	nextTodoId += 1;
	return [
            ...state,
            {
		text: action.text,
		id: nextTodoId,
		completed: false
            }
	];
    case TOGGLE_TODO:
	return state.map((todo, index) => {
            if (index === action.index) {
		return Object.assign({}, todo, {
		    completed: !todo.completed
		});
            }
            return todo;
	});
    default:
	return state;
    }
}

const persistentTodos = persistentReducer(todos);

const todoApp = combineReducers({
    visibilityFilter: visibilityFilter,
    todos: persistentTodos,
    loggedIn: login
});

export default todoApp;
