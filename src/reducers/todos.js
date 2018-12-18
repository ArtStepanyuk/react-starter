import {
  TOGGLE_COMPLETED,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_SEARCH_QUERY,
  ITEMS_ARE_LOADING,
  ITEMS_ARE_LOADED,
  ITEMS_HAVE_ERROR
} from '../constants'

const initialState = {
  searchQuery: '',
  items: [],
  hasError: false,
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        items: [...state.items, action.payload]
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
        items: state.items.map(item => ({
          ...item,
          completed: id === item.id ? !item.completed : item.completed
        }))
      }
    }

    case REMOVE_TODO: {
      const {
        payload: { id }
      } = action
      return {
        ...state,
        items: state.items.filter(i => i.id !== id)
      }
    }

    case ITEMS_HAVE_ERROR:
      return {
        ...state,
        hasError: action.payload
      }

    case ITEMS_ARE_LOADING:
      return {
        ...state,
        loading: action.payload
      }

    case ITEMS_ARE_LOADED:
      return {
        ...state,
        items: [...action.payload]
      }

    default:
      return state
  }
}
