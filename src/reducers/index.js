import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import todos from './todos'
import user from './user'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    todos,
    user
  })

export default rootReducer
