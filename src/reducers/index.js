import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import authReducer from './auth'
import menuReducer from './menu'

export default combineReducers({
	routing: routerReducer,
	auth: authReducer,
	menu: menuReducer
})
