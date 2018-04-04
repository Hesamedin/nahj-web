import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import {
	SCREEN_LETTERS,
	SCREEN_PREFACE_DASHTI,
	SCREEN_PREFACE_SEYED_RAZI,
	SCREEN_SPEECHES,
	SCREEN_VERDICTS,
	SCREEN_WISDOM
} from '../App'
import './../styles/mystyles.css'

const MENU_LETTERS = 'menu_letters'
const MENU_SPEECHES = 'menu_speeches'
const MENU_VERDICTS = 'menu_verdicts'
const MENU_WISDOM = 'menu_wisdom'
const MENU_PREFACE_DASHTI = 'menu_preface_dashti'
const MENU_PREFACE_SEYED_RZI = 'menu_preface_seyed_razi'

const MenuItems = Object.freeze({
	MENU_LETTERS: Symbol(MENU_LETTERS),
	MENU_SPEECHES: Symbol(MENU_SPEECHES),
	MENU_VERDICTS: Symbol(MENU_VERDICTS),
	MENU_WISDOM: Symbol(MENU_WISDOM),
	MENU_PREFACE_DASHTI: Symbol(MENU_PREFACE_DASHTI),
	MENU_PREFACE_SEYED_RZI: Symbol(MENU_PREFACE_SEYED_RZI)
})

class MenuComponent extends Component {

	constructor() {
		super()
		this.state = {
			isLettersActive: true,
			isSpeechesActive: false,
			isVerdictsActive: false,
			isWisdomActive: false,
			isPrefaceDashtiActive: false,
			isPrefaceSeyedRaziActive: false
		}
	}

	toggleMenu = (menuItem: MenuItems) => {
		if (menuItem === MenuItems.MENU_LETTERS && this.state.isLettersActive) return
		if (menuItem === MenuItems.MENU_SPEECHES && this.state.isSpeechesActive) return
		if (menuItem === MenuItems.MENU_VERDICTS && this.state.isVerdictsActive) return
		if (menuItem === MenuItems.MENU_WISDOM && this.state.isWisdomActive) return
		if (menuItem === MenuItems.MENU_PREFACE_DASHTI && this.state.isPrefaceDashtiActive) return
		if (menuItem === MenuItems.MENU_PREFACE_SEYED_RZI && this.state.isPrefaceSeyedRaziActive) return

		//
		this.setState({
			isLettersActive: menuItem === MenuItems.MENU_LETTERS,
			isSpeechesActive: menuItem === MenuItems.MENU_SPEECHES,
			isVerdictsActive: menuItem === MenuItems.MENU_VERDICTS,
			isWisdomActive: menuItem === MenuItems.MENU_WISDOM,
			isPrefaceDashtiActive: menuItem === MenuItems.MENU_PREFACE_DASHTI,
			isPrefaceSeyedRaziActive: menuItem === MenuItems.MENU_PREFACE_SEYED_RZI
		})
	}

	getClassName = (isActive) => {
		return (isActive ? 'is-active' : '')
	}

	render() {
		return (
			<div className="container padding-top-bottom-10">
				<div className="tabs is-centered is-toggle is-medium">
					<ul>
						<li className={this.getClassName(this.state.isLettersActive)}>
							<a onClick={this.onMILettersClick}>Letters</a>
						</li>
						<li className={this.getClassName(this.state.isSpeechesActive)}>
							<a onClick={this.onMISpeechClick}>Speeches</a>
						</li>
						<li className={this.getClassName(this.state.isVerdictsActive)}>
							<a onClick={this.onMIVerdictClick}>Verdicts</a>
						</li>
						<li className={this.getClassName(this.state.isWisdomActive)}>
							<a onClick={this.onMIWisdomClick}>Wisdom</a>
						</li>
						<li className={this.getClassName(this.state.isPrefaceDashtiActive)}>
							<a onClick={this.onMIPrefaceDashtiClick}>Preface Dashti</a>
						</li>
						<li className={this.getClassName(this.state.isPrefaceSeyedRaziActive)}>
							<a onClick={this.onMIPrefaceSeyedRaziClick}>Preface Seyed Razi</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}

	onMILettersClick = () => {
		this.toggleMenu(MenuItems.MENU_LETTERS)
		this.props.navToLettersScreen()
	}

	onMISpeechClick = () => {
		this.toggleMenu(MenuItems.MENU_SPEECHES)
		this.props.navToSpeechesScreen()
	}

	onMIVerdictClick = () => {
		this.toggleMenu(MenuItems.MENU_VERDICTS)
		this.props.navToVerdictsScreen()
	}

	onMIWisdomClick = () => {
		this.toggleMenu(MenuItems.MENU_WISDOM)
		this.props.navToWisdomScreen()
	}

	onMIPrefaceDashtiClick = () => {
		this.toggleMenu(MenuItems.MENU_PREFACE_DASHTI)
		this.props.navToPrefaceDashtiScreen()
	}

	onMIPrefaceSeyedRaziClick = () => {
		this.toggleMenu(MenuItems.MENU_PREFACE_SEYED_RZI)
		this.props.navToPrefaceSeyedRaziScreen()
	}
}

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		navToLettersScreen: () => push(SCREEN_LETTERS),
		navToSpeechesScreen: () => push(SCREEN_SPEECHES),
		navToVerdictsScreen: () => push(SCREEN_VERDICTS),
		navToWisdomScreen: () => push(SCREEN_WISDOM),
		navToPrefaceDashtiScreen: () => push(SCREEN_PREFACE_DASHTI),
		navToPrefaceSeyedRaziScreen: () => push(SCREEN_PREFACE_SEYED_RAZI)
	},
	dispatch
)

export default connect(null, mapDispatchToProps)(MenuComponent)
