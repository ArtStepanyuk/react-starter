import { connect } from 'react-redux'
import { toggleCompleted, removeTodo } from '../../actions'
import TodoItem from '../../components/Todos/TodoItem'

const mapDispatchToProps = {
  toggleCompleted,
  removeTodo
}

export default connect(
  null,
  mapDispatchToProps
)(TodoItem)
