import {
  TOGGLE_COMPLETED,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_SEARCH_QUERY
} from "../constants";

const initialState = {
  searchQuery: "",
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }

    case UPDATE_SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload.queryString
      };
    }

    case TOGGLE_COMPLETED: {
      const {
        payload: { id }
      } = action;
      return {
        ...state,
        items: state.items.map(item => ({
          ...item,
          completed: id === item.id ? !item.completed : item.completed
        }))
      };
    }

    case REMOVE_TODO: {
      const {
        payload: { id }
      } = action;
      return {
        ...state,
        items: state.items.filter(i => i.id !== id)
      };
    }

    default:
      return state;
  }
}
