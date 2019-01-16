import React, { Component } from 'react'
import { ClipLoader } from 'react-spinners'

export default WrappedComponent =>
  class extends Component {
    componentDidMount() {
      const { fetchData } = this.props
      fetchData()
    }

    render() {
      const { loading } = this.props
      return loading ? (
        <ClipLoader sizeUnit="px" size={150} color="#123abc" loading={loading} />
      ) : (
        <WrappedComponent {...this.props} />
      )
    }
  }
