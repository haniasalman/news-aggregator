import {
  FETCH_NEWS,
  SET_NEWS,
  FETCH_NEWS_FAILED,
  SEARCH_ARTICLES_REQUEST,
  SEARCH_ARTICLES_SUCCESS,
  SEARCH_ARTICLES_FAILURE,
} from './actionTypes';

export const fetchNews = (source, category, keyword) => ({
  type: FETCH_NEWS,
  payload: { source, category, keyword },
});

export const setNews = (news) => ({
  type: SET_NEWS,
  payload: news,
});

export const fetchNewsFailed = () => ({
  type: FETCH_NEWS_FAILED,
});

export const searchArticlesRequest = (searchQuery) => ({
  type: SEARCH_ARTICLES_REQUEST,
  payload: searchQuery,
});

export const searchArticlesSuccess = (searchArticles) => ({
  type: SEARCH_ARTICLES_SUCCESS,
  payload: searchArticles,
});

export const searchArticlesFailure = (error) => ({
  type: SEARCH_ARTICLES_FAILURE,
  payload: error,
});
