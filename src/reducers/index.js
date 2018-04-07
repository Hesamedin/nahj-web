import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import authReducer from './auth'
import menuReducer from './menu'
import firebaseReducer from './firebase'

export default combineReducers({
	routing: routerReducer,
	auth: authReducer,
	menu: menuReducer,
	firebase: firebaseReducer
})
