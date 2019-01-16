import { GET_NEWS, SET_NEWS, ITEMS_LOADING_DONE, ITEMS_LOADING_START } from '../constants'

const getNews = () => ({
  type: GET_NEWS
})

const startFetch = () => ({
  type: ITEMS_LOADING_START
})

const finishFetch = () => ({
  type: ITEMS_LOADING_DONE
})

const setNews = payload => ({
  type: SET_NEWS,
  payload
})

export { getNews, setNews, startFetch, finishFetch }
