import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../resources/news.resource'
import { setNews } from '../actions'
import { GET_NEWS } from '../constants'

export function* fetchNews() {
	try {
		const { data: news } = yield call(api.getNews)
		yield put(setNews(news.articles))
	} catch (e) {
		console.log('error', e)
	}
}

export default function* newsSaga() {
	yield takeLatest(GET_NEWS, fetchNews)
}
