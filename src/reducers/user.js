import { TOGGLE_USER_LOGGED_STATE } from '../constants'

const initialState = {
  isAuthenticated: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_USER_LOGGED_STATE: {
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated
      }
    }
    default:
      return state
  }
}
