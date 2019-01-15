import { GET_NEWS, SET_NEWS } from '../constants'

const getNews = () => ({
	type: GET_NEWS
})

const setNews = payload => ({
	type: SET_NEWS,
	payload
})

export { getNews, setNews }
