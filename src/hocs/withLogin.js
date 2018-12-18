import React from 'react'
import { connect } from 'react-redux'

export const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
})

export const withLogin = WrappedComponent => {
  const hocComponent = ({ ...props }) => {
    const { isAuthenticated } = props
    console.log(props)
    if (!isAuthenticated) {
      return <div>Login first</div>
    }
    return <WrappedComponent {...props} />
  }

  hocComponent.propTypes = {}

  return hocComponent
}

export default WrapperComponent =>
  connect(
    mapStateToProps,
    null
  )(withLogin(WrapperComponent))
