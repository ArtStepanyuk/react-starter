import React, { Fragment, Component } from 'react'
import { ClipLoader } from 'react-spinners'
import TodoItem from '../../containers/Todos/TodTodoItemContainerItem'
import EmptyResult from '../common/EmptyResult'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.renderList = this.renderList.bind(this)
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData('https://jsonplaceholder.typicode.com/todos')
  }

  renderList() {
    const { todos, loading } = this.props
    if (loading) {
      return <ClipLoader sizeUnit="px" size={150} color="#123abc" loading={loading} />
    }
    return todos.length > 0 ? todos.map(i => <TodoItem {...i} key={i.id} />) : <EmptyResult text="Add something" />
  }

  render() {
    return <Fragment>{this.renderList()}</Fragment>
  }
}
