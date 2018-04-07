import React, { Component } from 'react'
import { connect } from 'react-redux'
import './../styles/bodyStyle.css'

class BodyComponent extends Component {

	render() {
		return (
			/* <!-- Main container --> */
			<nav className="level body-container">
				{/* <!-- Left side --> */}
				<div className="level-left">
					<div className="level-item">
						This is left
					</div>
				</div>

				{/* <!-- Right side --> */}
				<div className="level-right">
					<div className="level-item sidebar-item">
						{SideBarPanel(this.props.name, this.props.letters)}
					</div>
				</div>
			</nav>
		)
	}
}

const SideBarPanel = (title, itemList) => (
	<nav className="panel body-sidebar">
		<p className="panel-heading sidebar-title">{title}</p>

		{itemList.map((it, i) => <PanelItem key={i} id={it.id} title={it.title}/>)}
	</nav>
)

const PanelItem = props => <a className="panel-block">{props.id}. {props.title}</a>

const mapStateToProps = state => ({
	letters: state.firebase.letters
})

export default connect(mapStateToProps)(BodyComponent)