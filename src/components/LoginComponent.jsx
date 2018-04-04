import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { bindActionCreators } from 'redux'
import { menuEnabledAction } from './../actions/menu'
import '../styles/loginStyles.css'

class LoginComponent extends Component {

	componentDidMount() {
		this.props.hideMenuBar()
	}

	componentWillUnmount() {
		this.props.showMenuBar()
	}

	render() {
		return (
			<section className="container container-body">
				<div className="columns is-centered">
					<LoginForm/>
				</div>
			</section>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		hideMenuBar: () => menuEnabledAction(false),
		showMenuBar: () => menuEnabledAction(true)
	},
	dispatch
)

export default connect(undefined, mapDispatchToProps)(LoginComponent)
