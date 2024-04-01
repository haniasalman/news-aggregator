import { call, put, takeLatest } from 'redux-saga/effects';
import fetchGuardianArticles from '../../services/theguardian';
import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from './actionTypes';

function* fetchNewsSaga() {
  try {
    const response = yield call(fetchGuardianArticles);
    yield put({ type: FETCH_NEWS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: FETCH_NEWS_FAILURE, error });
  }
}

function* newsSaga() {
  yield takeLatest(FETCH_NEWS_REQUEST, fetchNewsSaga);
}

export default newsSaga;
