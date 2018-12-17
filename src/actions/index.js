import { TOGGLE_COMPLETED, ADD_TODO, REMOVE_TODO, UPDATE_SEARCH_QUERY } from '../constants'

export function toggleCompleted(id) {
	return { type: TOGGLE_COMPLETED, payload: { id } }
}

export function removeTodo(id) {
	return { type: REMOVE_TODO, payload: { id } }
}

export function updateSearchQuery(queryString) {
	return { type: UPDATE_SEARCH_QUERY, payload: { queryString } }
}

export function addTodo(todo) {
	return { type: ADD_TODO, payload: todo }
}
