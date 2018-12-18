import { TOGGLE_USER_LOGGED_STATE } from '../constants'

export function toggleUserLoggedStatus() {
  // we just simulate login now
  return { type: TOGGLE_USER_LOGGED_STATE, payload: {} }
}
