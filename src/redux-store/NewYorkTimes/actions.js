import {
  FETCH_NYT_ARTICLES_REQUEST,
  FETCH_NYT_ARTICLES_SUCCESS,
  FETCH_NYT_ARTICLES_FAILURE,
} from './actionTypes';

export const fetchNytArticlesRequest = (section) => ({
  type: FETCH_NYT_ARTICLES_REQUEST,
  payload: { section },
});

export const fetchNytArticlesSuccess = (section, articles) => ({
  type: FETCH_NYT_ARTICLES_SUCCESS,
  payload: { section, articles },
});

export const fetchNytArticlesFailure = (section, error) => ({
  type: FETCH_NYT_ARTICLES_FAILURE,
  payload: { section, error },
});
