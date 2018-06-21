import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    SET_LOGIN_TOKEN,
    SET_LOGGED_IN
} from './actionTypes';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text) {
    return { type: ADD_TODO, text };
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}

export function setLoggedIn(loggedIn = true) {
    return { type: SET_LOGGED_IN, loggedIn };
}

export function setLoggedOut() {
    return setLoggedIn(false);
}
