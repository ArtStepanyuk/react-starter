import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import NewsListContainer from './containers/NewsListContainer'

library.add(fas, far, fab)
function App() {
	return <NewsListContainer />
}

export default App
