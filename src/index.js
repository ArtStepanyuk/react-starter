import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserHistory } from 'history'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import App from './App'
import store from './storeCreator'

library.add(fas, far, fab)

const history = createBrowserHistory()

const Root = () => (
  <Provider store={store(history)}>
    <App history={history} />
  </Provider>
)

render(<Root />, document.getElementById('app'))
serviceWorker.unregister()
