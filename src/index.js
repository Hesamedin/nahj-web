// Structure of this file is based on:
// https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configStore, { history } from './store/configStore'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './../node_modules/bulma/css/bulma.css'

const target = document.getElementById('root')

const store = configStore()
const jsx = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<App />
			</div>
		</ConnectedRouter>
	</Provider>
)

ReactDOM.render(jsx, target)
registerServiceWorker()