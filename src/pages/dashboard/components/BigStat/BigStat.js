import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { getDaysAgo } from '../TopHeadlines/TopHeadlines';
import Link from '@material-ui/core/Link';

export default function BigStat(props) {
  var { title, img, author, publishDate, newsSource, url } = props;

  return (
    <Card variant='outlined' sx={{ width: 320, height: '100%' }}>
      <CardOverflow>
        <AspectRatio objectFit='fill'>
          <img src={img} loading='lazy' alt='thumbnails' />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Link href={url} underline='none' target='_blank'>
          <Typography level='title-md'>{title}</Typography>
        </Link>
        <Typography level='body-sm'>{author}</Typography>
      </CardContent>
      <CardOverflow variant='soft' sx={{ bgcolor: 'background.level1' }}>
        <Divider inset='context' />
        <CardContent orientation='horizontal'>
          <Typography
            level='body-xs'
            fontWeight='md'
            textColor='text.secondary'
          >
            {getDaysAgo(publishDate)}
          </Typography>
          <Divider orientation='vertical' />
          <Typography
            level='body-xs'
            fontWeight='md'
            textColor='text.secondary'
          >
            {newsSource}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
