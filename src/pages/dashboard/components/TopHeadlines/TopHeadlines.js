import React from 'react';
import { Grid, Typography, ButtonBase, Button } from '@material-ui/core';

const TopHeadlinesCard = ({ title, author, publishedAt, urlToImage, url }) => {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12} sm={4}>
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <img
            style={{
              margin: 'auto',
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            alt='headline_img'
            src={urlToImage}
          />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Grid container direction='column' spacing={2}>
          <Grid item xs>
            <Typography
              gutterBottom
              variant='h6'
              noWrap
              style={{ fontWeight: 600 }}
            >
              {title}
            </Typography>
            <Typography variant='body2' gutterBottom>
              {author} • {getDaysAgo(publishedAt)}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              color='primary'
              size='small'
              component='a'
              href={url}
              target='_blank'
            >
              Read More...
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopHeadlinesCard;

// ########################################
export const getDaysAgo = (publishedDate) => {
  const currentDate = new Date();
  const dateDiff = currentDate - new Date(publishedDate);
  const daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    return 'Today';
  } else if (daysDiff === 1) {
    return 'Yesterday';
  } else {
    return `${daysDiff} days ago`;
  }
};
