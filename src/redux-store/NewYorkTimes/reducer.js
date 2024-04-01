import {
  FETCH_NYT_ARTICLES_REQUEST,
  FETCH_NYT_ARTICLES_SUCCESS,
  FETCH_NYT_ARTICLES_FAILURE,
} from './actionTypes';

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

const nytReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NYT_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NYT_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articlesBySection: {
          ...state.articlesBySection,
          [action.payload.section]: action.payload.articles,
        }
      
      };
    case FETCH_NYT_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default nytReducer;
