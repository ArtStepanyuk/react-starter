import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleUserLoggedStatus } from '../actions'
import AppNavbar from '../components/common/AppNavbar'

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
})

const mapDispatchToProps = {
  toggleUserLoggedStatus
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppNavbar)
)

