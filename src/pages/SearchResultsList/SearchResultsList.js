import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import ArticlesCard from '../Articles/ArticlesCard';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import Stack from '@mui/joy/Stack';
import { searchArticlesList } from '../../redux-store/selector';

export default function SearchResultsList(props) {
  var classes = useStyles();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q');

  const searchArticle = useSelector(searchArticlesList, shallowEqual);
  const searchResults = searchArticle.slice(0, 20); 

  return (
    <div className={classes.container}>
      <Typography variant='h2' component='div' style={{ marginBottom: '30px' }}>
        Search Results for: {searchQuery}
      </Typography>

      <Stack  direction='column' spacing={4}>
        {searchResults?.map((article, index) => (
          <ArticlesCard
            key={index}
            title={article?.title}
            content={article?.description}
            imageSrc={article?.urlToImage}
            url={article?.url}
          />
        ))}
      </Stack>
    </div>
  );
}
