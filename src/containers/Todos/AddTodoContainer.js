import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import AddTodoModal from '../../components/Todos/AddTodoModal'

const mapDispatchToProps = {
	addTodo
}

export default connect(
	null,
	mapDispatchToProps
)(AddTodoModal)
