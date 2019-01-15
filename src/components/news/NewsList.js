import React, { Component } from 'react'

export default class NewsList extends Component {
	componentDidMount() {
		const { fetchNews } = this.props
		fetchNews()
	}

	render() {
		const { news } = this.props
		console.log(news)
		return <div>{news.length && news.map((item, index) => <h1 key={index}>{item.author}</h1>)}</div>
	}
}
