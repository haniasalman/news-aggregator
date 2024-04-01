import { put, takeLatest ,call} from 'redux-saga/effects';
// import { FETCH_NEWS, setNews, fetchNewsFailed } from './actions';
import {
  FETCH_NEWS,
  SET_NEWS,
  FETCH_NEWS_FAILED,
  SEARCH_ARTICLES_REQUEST,
  SEARCH_ARTICLES_SUCCESS,
  SEARCH_ARTICLES_FAILURE,
} from './actionTypes';
import { fetchArticles,SearchArticles } from '../../services/newsapi';

export function* fetchNewsSaga(action) {
  const { source, category, keyword } = action.payload;
  try {
    const articles = yield fetchArticles(source, category, keyword);
    yield put({ type: SET_NEWS, payload: articles });
  } catch (error) {
    yield put({ type: FETCH_NEWS_FAILED, error });
  }
}

function* searchArticlesSaga(action) {
  try {
    const articles = yield call(SearchArticles, action.payload);
    yield put({ type: SEARCH_ARTICLES_SUCCESS, payload: articles });
  } catch (error) {
    yield put({ type: SEARCH_ARTICLES_FAILURE, error });
  }
}

export function* watchFetchNews() {
  yield takeLatest(FETCH_NEWS, fetchNewsSaga);
}
export function* watchSearchArticles() {
  yield takeLatest(SEARCH_ARTICLES_REQUEST, searchArticlesSaga);
}
