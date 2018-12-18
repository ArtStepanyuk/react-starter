import { connect } from 'react-redux'
import { compose } from 'redux'
import TodoList from '../../components/Todos/TodoList'
import { fetchData } from '../../actions'

const mapStateToProps = state => ({
  todos: state.todos.items.filter(i => i.title.includes(state.todos.searchQuery)),
  loading: state.todos.loading
})

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(fetchData(url))
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TodoList)
