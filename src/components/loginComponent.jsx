import React, { Component } from 'react'
import LoginForm from './loginForm'

class LoginStyle extends Component {
	render() {
		return (
			<section className="hero is-primary is-fullheight">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-centered">
							<div className="column is-5-tablet is-4-desktop is-3-widescreen">
								{/* Our form code goes here */}
								<LoginForm/>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default LoginStyle;
