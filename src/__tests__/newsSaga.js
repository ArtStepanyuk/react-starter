import { runSaga } from 'redux-saga'
import { fetchNews } from '../sagas/news'
import * as api from '../resources/news.resource'
import { setNews } from '../actions'

test('It should load data, and set correct data', async () => {
  const dispatchedActions = []
  const mockedData = { data: { articles: [{ author: 'One' }, { author: 'Two' }] } }

  api.getNews = jest.fn(() => Promise.resolve(mockedData))
  const fakeStore = {
    dispatch: action => dispatchedActions.push(action)
  }

  await runSaga(fakeStore, fetchNews).done
  expect(api.getNews.mock.calls.length).toBe(1)
  expect(dispatchedActions).toContainEqual(setNews(mockedData.data.articles))
})
