import { put, call, takeEvery } from 'redux-saga/effects';
import {
  FETCH_NYT_ARTICLES_REQUEST,
  FETCH_NYT_ARTICLES_SUCCESS,
  FETCH_NYT_ARTICLES_FAILURE,
} from './actionTypes';
import fetchArticlesBySection from '../../services/newyorktimes'; 

function* fetchNytArticles(action) {
  const { section } = action.payload;
  try {
    const response = yield call(fetchArticlesBySection, section);
    yield put({ type: FETCH_NYT_ARTICLES_SUCCESS, payload: { section, articles: response } });
  } catch (error) {
    yield put({ type: FETCH_NYT_ARTICLES_FAILURE, payload: { section, error }  });
  }
}

function* nytSaga() {
  yield takeEvery(FETCH_NYT_ARTICLES_REQUEST, fetchNytArticles);
}

export default nytSaga;
