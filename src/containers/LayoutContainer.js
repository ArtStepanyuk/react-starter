import React, { Fragment, Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import ToDosListContainer from './Todos/ToDosListContainer'
import SearchContainer from './SearchContainer'
import AddTodoContainer from './Todos/AddTodoContainer'

export default class Layout extends Component {
	state = {
		showModal: false
	}

	toggleState() {
		this.setState(prevState => ({ showModal: !prevState.showModal }))
	}

	render() {
		const { showModal } = this.state
		return (
			<Fragment>
				<Row className="pt-5">
					<AddTodoContainer showModal={showModal} onCloseModal={() => this.toggleState()} />
					<Col sm={{ size: 1, offset: 1 }}>
						<strong>Search</strong>:
					</Col>
					<Col sm={{ size: 8 }}>
						<SearchContainer />
					</Col>
					<Col sm={{ size: 2 }}>
						<Button color="primary" onClick={() => this.toggleState()}>
							Add new
						</Button>
					</Col>
				</Row>
				<Row className="pt-5">
					<Col sm={{ size: 10, offset: 1 }}>
						<ToDosListContainer />
					</Col>
				</Row>
			</Fragment>
		)
	}
}
