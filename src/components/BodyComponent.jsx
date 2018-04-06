import React, { Component } from 'react'
import './../styles/bodyStyle.css'

const testList = [
	{ title: 'Title One', id: 1 },
	{ title: 'Title Two', id: 2 },
	{ title: 'Title Three', id: 3 }
]

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
					<div className="level-item">
						{SideBarPanel(testList)}
					</div>
				</div>
			</nav>
		)
	}
}

const SideBarPanel = itemList => (
	<nav className="panel body-sidebar">
		<p className="panel-heading sidebar-title">List of letters</p>

		{itemList.map((it, i) => <PanelItem key={i} id={it.id} title={it.title}/>)}
	</nav>
)

const PanelItem = props => <a className="panel-block">{props.id}. {props.title}</a>

export default BodyComponent