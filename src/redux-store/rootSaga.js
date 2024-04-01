import { all, fork } from 'redux-saga/effects';
import { watchFetchNews, watchSearchArticles } from '../redux-store/NewsApiOrg/saga';
import nytSaga from './NewYorkTimes/saga';
import newsSaga from './TheGuardian/saga';

export default function* rootSaga() {
  yield all([fork(watchFetchNews)]);
  yield all([fork(nytSaga)]);
  yield all([fork(newsSaga)]);
  yield all([fork(watchSearchArticles)]);
}
