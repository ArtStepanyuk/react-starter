import React, { Fragment, Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import ToDosListContainer from '../containers/Todos/ToDosListContainer'
import SearchContainer from '../containers/SearchContainer'
import AddTodoContainer from '../containers/Todos/AddTodoContainer'
import colHelpers from '../utils'

export default class Layout extends Component {
  state = {
    showModal: false
  }

  toggleState = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }))
  }

  render() {
    const { showModal } = this.state
    return (
      <Fragment>
        <Row className="pt-5">
          <AddTodoContainer showModal={showModal} onCloseModal={this.toggleState} />
          <Col sm={colHelpers.sizeOneOffsetOne}>
            <strong>Search</strong>:
          </Col>
          <Col sm={colHelpers.sizeEight}>
            <SearchContainer />
          </Col>
          <Col sm={colHelpers.sizeTwo}>
            <Button color="primary" onClick={this.toggleState}>
              Add new
            </Button>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col sm={colHelpers.sizeTenOffsetOne}>
            <ToDosListContainer />
          </Col>
        </Row>
      </Fragment>
    )
  }
}
