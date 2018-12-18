import { connect } from 'react-redux'
import { updateSearchQuery } from '../actions'
import Search from '../components/Search'

const mapDispatchToProps = {
  updateSearchQuery
}

export default connect(
  null,
  mapDispatchToProps
)(Search)
