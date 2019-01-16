import { all } from 'redux-saga/effects'

import news from './news'

export default function* rootSaga() {
  yield all([news()])
}
