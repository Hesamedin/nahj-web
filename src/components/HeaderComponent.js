import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import logo from '../assets/logo.svg'
import { SCREEN_LOGIN } from '../App'
import '../styles/header/headerStyle.css'

const HeaderComponent = props => (
	<header className="header-container">
		<div className="logo-branding">
			<img src={logo} className="logo" alt="logo"/>
			<h1 className="title is-2 has-text-white">Welcome to Nahj al-Balagha</h1>
		</div>

		<a className="button"
		   onClick={() => props.navToLoginScreen()}
		>
			Login
		</a>
	</header>
)

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		navToLoginScreen: () => push(SCREEN_LOGIN)
	},
	dispatch
)

export default connect(null, mapDispatchToProps)(HeaderComponent)
