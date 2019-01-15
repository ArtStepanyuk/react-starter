import { SET_NEWS } from '../constants'

const initialState = {
	items: []
}

export default function(state = initialState, action) {
	switch (action.type) {
	case SET_NEWS: {
		return {
			...state,
			items: [...action.payload]
		}
	}
	default:
		return state
	}
}
