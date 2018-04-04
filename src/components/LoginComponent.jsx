import React, { Component } from 'react'
import LoginForm from './LoginForm'

class LoginStyle extends Component {
	render() {
		return (
			<section className="hero is-primary is-fullheight">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-centered">
							<LoginForm/>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default LoginStyle;
