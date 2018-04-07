import React, { Component } from 'react'
import { connect } from 'react-redux'
import BodyComponent from './BodyComponent'
import { getListOfLetters } from '../actions/firebase'
import { bindActionCreators } from 'redux'
import {setLettersAction} from './../actions/firebase'

const LIST_NAME = "لیست نامه ها"

class MI_LettersComponent extends Component {

	componentDidMount() {
		getListOfLetters('0', '9').then((articles) => {
			console.log(articles.length + ' items received')
			this.props.setLetter(articles)
		}).catch((error) => {
			console.log(error.message)
		})
	}

	render() {
		return (
			<BodyComponent name={LIST_NAME}/>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	setLetter: (letters) => setLettersAction(letters)
}, dispatch)

export default connect(null, mapDispatchToProps)(MI_LettersComponent)