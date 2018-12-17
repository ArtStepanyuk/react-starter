import { connect } from 'react-redux'
import TodoList from '../../components/Todos/TodoList'

const mapStateToProps = state => ({
	todos: state.todos.todosItems.filter(i => i.text.includes(state.todos.searchQuery))
})

export default connect(
	mapStateToProps,
	null
)(TodoList)