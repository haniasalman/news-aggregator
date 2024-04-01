import { createSelector } from 'reselect';

const articleList = (state) => state.newsReducer;
const NytArticleList = (state) => state.nytReducer;
const GuardArticleList = (state) => state.guardianReducer;

export const selectArticlesList = createSelector(
  [articleList],
  (data) => data.articles
);

export const selectNytArticlesList = createSelector(
  [NytArticleList],
  (data) => data.articlesBySection
);

export const selectGuardArticlesList = createSelector(
  [GuardArticleList],
  (data) => data.articles
);

export const searchArticlesList = createSelector(
  [articleList],
  (data) => data.searchArticles
);
