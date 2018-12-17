import { TOGGLE_COMPLETED, ADD_TODO, REMOVE_TODO, UPDATE_SEARCH_QUERY } from '../constants'

const initialState = {
	searchQuery: '',
	todosItems: []
}

export default function(state = initialState, action) {
	switch (action.type) {
	case ADD_TODO: {
		return {
			...state,
			todosItems: [...state.todosItems, action.payload]
		}
	}

	case UPDATE_SEARCH_QUERY: {
		return {
			...state,
			searchQuery: action.payload.queryString
		}
	}

	case TOGGLE_COMPLETED: {
		const {
			payload: { id }
		} = action
		return {
			...state,
			todosItems: state.todosItems.map(item => ({
				...item,
				completed: id === item.id ? !item.completed : item.completed
			}))
		}
	}

	case ADD_TODO: {
		const {
			payload: { todo }
		} = action
		todo.id = new Date()
		return {
			...state,
			todosItems: [...state.todosItems, todo]
		}
	}

	case REMOVE_TODO: {
		const {
			payload: { id }
		} = action
		return {
			...state,
			todosItems: state.todosItems.filter(i => i.id !== id)
		}
	}

	default:
		return state
	}
}
