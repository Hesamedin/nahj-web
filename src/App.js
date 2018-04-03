import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import HomeComponent from './components/homeComponent'
import LoginComponent from './components/loginComponent'

export const SCREEN_ROOT = '/'
export const SCREEN_LOGIN = '/login'

const AppRouter = () => (
	<div>
		<HeaderComponent />

		<Switch>
			<Route exact path={SCREEN_ROOT} component={HomeComponent}/>
			<Route path={SCREEN_LOGIN} component={LoginComponent}/>
		</Switch>
	</div>
)

export default AppRouter