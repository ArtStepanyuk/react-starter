import { SET_NEWS, ITEMS_LOADING_START, ITEMS_LOADING_DONE } from '../constants'

const initialState = {
  items: [],
  loading: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_NEWS: {
      return {
        ...state,
        items: [...action.payload]
      }
    }
    case ITEMS_LOADING_START: {
      return {
        ...state,
        loading: true
      }
    }
    case ITEMS_LOADING_DONE: {
      return {
        ...state,
        loading: false
      }
    }
    default:
      return state
  }
}
