import { connect } from 'react-redux'
import NewsList from '../components/news/NewsList'
import { getNews } from '../actions'

export const mapStateToProps = state => ({
	dataFromProps: 'hi',
	news: state.news.items
})

export const mapDispatchToProps = dispatch => ({
	fetchNews: () => dispatch(getNews())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewsList)
