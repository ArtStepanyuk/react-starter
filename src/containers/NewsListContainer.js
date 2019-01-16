import { connect } from 'react-redux'
import NewsList from '../components/news/NewsList'
import withApiCall from '../hocs/withApiCall'
import { getNews } from '../actions'

export const mapStateToProps = state => ({
  dataFromProps: 'hi',
  loading: state.news.loading,
  news: state.news.items
})

export const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getNews())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withApiCall(NewsList))
