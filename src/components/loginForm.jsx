import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Logo from '../assets/logo-bis.png'
import { loginByEmailAction, startLoginByEmail } from '../actions/auth'
import { push } from 'react-router-redux'
import { SCREEN_ROOT } from '../App'

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	onSubmitClick = (e) => {
		e.preventDefault();

		const { email, password } = this.state;
		const nextAction = () => {
			this.props.loginByEmailAction()
			this.props.navToHomeScreen()
		}
		startLoginByEmail(email, password, nextAction)
	}

	handleUserInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<form className="box" onSubmit={this.onSubmitClick}>
				<div className="field has-text-centered">
					<img src={Logo} width="167" alt="pic"/>
				</div>

				<div className="field">
					<label className="label">Email</label>
					<div className="control has-icons-left">
						<input
							name="email"
							className="input"
							type="email"
							placeholder="e.g. me@example.com"
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
			</form>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		loginByEmailAction: () => loginByEmailAction(),
		navToHomeScreen: () => push(SCREEN_ROOT)
	},
	dispatch
)

export default connect(null, mapDispatchToProps)(LoginForm)
