import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CreateAction from '../actions/auth'
import { push } from 'react-router-redux'
import { SCREEN_ROOT } from '../App'
import './../styles/mystyles.css'
import './../styles/social_buttons.css'

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
            emailValidationErrorMessage: '',
            googleValidationErrorMessage: '',
            isEmailValidationErrorVisible: false,
            isGoogleValidationErrorVisible: false,
            password: ''
		}
	}

	clearError = () => {
		this.setState({
			emailValidationErrorMessage: '',
			googleValidationErrorMessage: '',
			isEmailValidationErrorVisible: false,
			isGoogleValidationErrorVisible: false
		})
	}

	onSubmitClick = (e) => {
		e.preventDefault()
		this.clearError()

		const { email, password } = this.state
		const nextAction = () => {
			this.props.loginByEmailAction()
			this.props.navToHomeScreen()
		}
		const onErrorByEmailLogin = (errorMessage) => {
			this.setState({
				emailValidationErrorMessage: errorMessage,
				isEmailValidationErrorVisible: true
			})
		}
		startLoginByEmail(email, password, nextAction, onErrorByEmailLogin)
	}

	onGoogleAuthClick = () => {
		const nextAction = () => {
			this.props.loggedInByGoogle()
			this.props.navToHomeScreen()
		}
		const onErrorByGoogleLogin = (errorMessage) => {
			this.setState({
				googleValidationErrorMessage: errorMessage,
				isGoogleValidationErrorVisible: true
			})
		}
		startLoginByGoogle(nextAction, onErrorByGoogleLogin)
	}

	handleUserInput = (e) => {
		const name = e.target.name
		const value = e.target.value
		this.setState({ [name]: value })
	}

	displayEmailValidationError = () => {
		if (this.state.isEmailValidationErrorVisible) {
			return (
				<div className="box">
					<h6 className="title is-6 has-text-danger">{this.state.emailValidationErrorMessage}</h6>
				</div>
			)
		} else {
			return (
				<div/>
			)
		}
	}

	displayGoogleValidationError = () => {
		if (this.state.isGoogleValidationErrorVisible) {
			return (
				<div>
					<div className="empty_10px"/>
					<div className="box">
						<h6 className="title is-6 has-text-danger">{this.state.googleValidationErrorMessage}</h6>
					</div>
				</div>
			)
		} else {
			return (
				<div/>
			)
		}
	}

	render() {
		return (
			<div className="columns">
				<div className="column is-two-thirds">
					<form className="box" onSubmit={this.onSubmitClick}>
						<div className="field has-text-centered">
							<h2 className="title is-2 has-text-grey-dark">Login By Email</h2>
						</div>

						<div className="field">
							<label className="label">Email</label>
							<div className="control has-icons-left">
								<input
									name="email"
									className="input"
									type="email"
									placeholder="e.g. me@gmail.com"
									value={this.state.email}
									onChange={(event) => this.handleUserInput(event)}
									required/>
								<span className="icon is-small is-left">
							<i className="fas fa-envelope"/>
						</span>
							</div>
						</div>

						<div className="field">
							<label className="label">Password</label>
							<div className="control has-icons-left">
								<input
									name="password"
									className="input"
									type="password"
									placeholder="*********"
									value={this.state.password}
									onChange={(event) => this.handleUserInput(event)}
									required/>
								<span className="icon is-small is-left">
							<i className="fas fa-lock"/>
						</span>
							</div>
						</div>

						<div className="field">
							<label className="checkbox">
								<input type="checkbox"/>
								Remember me
							</label>
						</div>

						<div className="field">
							<button className="button is-success">
								Login
							</button>
						</div>

						{this.displayEmailValidationError()}
					</form>
				</div>

				<div className="column auto">
					<div className="box has-text-centered">
						<div className="field">
							<h2 className="title is-2 has-text-grey-dark">Login By:</h2>
						</div>

						<button className="loginBtn loginBtn--google"
						        onClick={this.onGoogleAuthClick}>
							Login with Google
						</button>

						<div className="empty_10px"/>

						<button className="loginBtn loginBtn--facebook">
							Login with Facebook
						</button>

						{this.displayGoogleValidationError()}
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		loggedInByGoogle: () => CreateAction.loggedInByGoogle(),
		loginByEmailAction: () => CreateAction.loginByEmailAction(),
		navToHomeScreen: () => push(SCREEN_ROOT)
	},
	dispatch
)

export default connect(null, mapDispatchToProps)(LoginForm)
