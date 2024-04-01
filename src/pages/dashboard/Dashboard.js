import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  Grid,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Box,
} from '@material-ui/core';
// styles
import useStyles from './styles';
import no_img_thumb from '../../assests/images/No_Image_Available.jpg';
import Widget from '../../components/Widget';
import PageTitle from '../../components/PageTitle';
import { Typography } from '../../components/Wrappers';
import BigStat from './components/BigStat/BigStat';
import AutoGrid from '../NewsFeed/NewsFeed';
import { fetchNews } from '../../redux-store/NewsApiOrg/actions';
import {
  selectArticlesList,
  selectNytArticlesList,
  selectGuardArticlesList,
} from '../../redux-store/selector';
import { useEffect } from 'react';
import TopHeadlinesCard from './components/TopHeadlines/TopHeadlines';
import { fetchNytArticlesRequest } from '../../redux-store/NewYorkTimes/actions';
import { fetchNewsRequest } from '../../redux-store/TheGuardian/actions';

export default function Dashboard(props) {
  var classes = useStyles();

  const dispatch = useDispatch();
  const art = useSelector(selectArticlesList, shallowEqual);
  const NytArticles = useSelector(selectNytArticlesList, shallowEqual);
  const guardArticles = useSelector(selectGuardArticlesList, shallowEqual);

  const [newsApiData, setNewsApiData] = useState([]);
  const [guardianData, setGuardianData] = useState([]);
  const [nytData, setNytData] = useState([]);

  useEffect(() => {
    setNewsApiData(art);
    setNytData(NytArticles);
    setGuardianData(guardArticles);
  }, [art, NytArticles, guardArticles]);

  useEffect(() => {
    dispatch(fetchNews());
    dispatch(fetchNytArticlesRequest('home'));
    dispatch(fetchNewsRequest());
  }, []);

  return (
    <div className={classes.container}>
      <PageTitle title='News Point' />
      <Grid container spacing={4}>
        <Grid item lg={8} md={8} sm={6} xs={12}>
          <Box
            height='100%'
            width='auto'
            // my={4}
            display='flex'
            alignItems='center'
            gap={4}
            p={4}
            sx={{
              border: '1px solid rgb(204, 204, 204);',
              backgroundColor: '#f0f4f8',
              borderRadius: '8px',
            }}
          >
            {NytArticles?.home && NytArticles?.home[0] && (
              <Card style={{ width: 'auto', height: '100%' }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='194'
                    image={NytArticles?.home[0]?.multimedia[1]?.url}
                    alt={NytArticles?.home[0]?.multimedia[2]?.caption}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='div'
                      style={{ fontWeight: 600 }}
                    >
                      {NytArticles?.home[0]?.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {NytArticles?.home[0]?.abstract}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size='small'
                    color='primary'
                    component='a'
                    href={NytArticles?.home[0]?.url}
                    target='_blank'
                  >
                    Read Full Article
                  </Button>
                </CardActions>
              </Card>
            )}
          </Box>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget >
            {art.slice(1, 4).map((article, index) => (
              <TopHeadlinesCard
                key={index}
                title={article?.title}
                author={article?.author}
                publishedAt={article?.publishedAt}
                urlToImage={article?.urlToImage}
                url={article?.url}
              />
            ))}
          </Widget>
        </Grid>

        <div
          style={{
            marginTop: '40px',
            marginBottom: '30px',
          }}
        >
          <Typography variant='h2' component='div'>
            Breaking News
          </Typography>
          <Typography
            variant='h6'
            component='div'
            style={{ color: 'rgba(0, 0, 0, 0.5)' }}
          >
            Check your all three news sources here
          </Typography>
        </div>

        <Grid container spacing={4} style={{ justifyContent: 'space-between' }}>
          <Grid item>
            <BigStat
              title={newsApiData[5]?.title}
              img={newsApiData[5]?.urlToImage}
              author={newsApiData[5]?.author}
              publishDate={newsApiData[5]?.publishedAt}
              newsSource={'NewsApi'}
              url={newsApiData[5]?.url}
            />
          </Grid>

          <Grid item>
            {NytArticles?.home && NytArticles?.home[5] && (
              <BigStat
                title={NytArticles?.home[5]?.title}
                img={NytArticles?.home[5]?.multimedia[2]?.url}
                author={NytArticles?.home[5]?.byline}
                publishDate={NytArticles?.home[5]?.published_date}
                newsSource={'New York Times'}
                url={NytArticles?.home[5]?.url}
              />
            )}
          </Grid>

          <Grid item>
            <BigStat
              title={guardianData[5]?.webTitle}
              img={no_img_thumb}
              author={guardianData[5]?.author}
              publishDate={guardianData[5]?.webPublicationDate}
              newsSource={'The Guardian'}
              url={guardianData[5]?.webUrl}
            />
          </Grid>
        </Grid>

        <div
          style={{
            marginTop: '40px',
            marginBottom: '30px',
          }}
        >
          <Typography variant='h2' component='div'>
            Your Favourites
          </Typography>
          <Typography
            variant='h6'
            component='div'
            style={{ color: 'rgba(0, 0, 0, 0.5)' }}
          >
            Customise based on your interests
          </Typography>
        </div>

        <AutoGrid />
      </Grid>
    </div>
  );
}
