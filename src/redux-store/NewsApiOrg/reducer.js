import {
  FETCH_NEWS,
  SET_NEWS,
  FETCH_NEWS_FAILED,
  SEARCH_ARTICLES_REQUEST,
  SEARCH_ARTICLES_SUCCESS,
  SEARCH_ARTICLES_FAILURE,
} from './actionTypes';

const initialState = {
  articles: [],
  searchArticles:[],
  loading: false,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, loading: true, error: null };
    case SET_NEWS:
      return { ...state, articles: action.payload, loading: false };
    case FETCH_NEWS_FAILED:
      return { ...state, loading: false, error: 'Failed to fetch news' };
    case SEARCH_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        searchArticles: action.payload,
      };
    case SEARCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
