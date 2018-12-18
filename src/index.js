import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import Layout from './components/Layout'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
)

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
)

render(<App />, document.getElementById('app'))
serviceWorker.unregister()
