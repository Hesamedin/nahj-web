import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import logo from '../assets/logo.svg'
import { SCREEN_LOGIN } from '../App'
import { logoutAction, startLogout } from './../actions/auth'
import '../styles/headerStyle.css'

class HeaderComponent extends Component {

	nextAction = () => {
		this.props.signedOut()
	}

	render(): JSX.Element {
		const isLoggedIn = this.props.loginStatus
		return (
			<header className="header-container">
				<div className="logo-branding">
					<img src={logo} className="logo" alt="logo"/>
					<h1 className="title is-2 has-text-white">Welcome to Nahj al-Balagha</h1>
				</div>

				<a className="button"
				   onClick={() => isLoggedIn ? startLogout(this.nextAction) : this.props.navToLoginScreen()}
				>
					{isLoggedIn ? "Logout" : "Login"}
				</a>
			</header>
		)
	}
}

const mapStateToProps = (state) => ({
	loginStatus: state.auth.loggedIn
})

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		navToLoginScreen: () => push(SCREEN_LOGIN),
		signedOut: () => logoutAction()
	},
	dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
