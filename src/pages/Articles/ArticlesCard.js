import React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { AspectRatio } from '@mui/joy';
import { Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Grid } from '@material-ui/core';

function ArticlesCard({ title, content, imageSrc, url }) {
  return (
    <Card orientation='horizontal' sx={{ borderRadius: 0, mb: 1 }}>
      <CardOverflow>
        <AspectRatio ratio='1'  sx={{ minWidth: 100 }}>
          <img src={imageSrc} loading='lazy' alt='' />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level='title-md' style={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography level='body-sm'>{content}</Typography>
        <Grid item>
          <Button
            variant='outlined'
            size='small'
            component='a'
            href={url}
            target='_blank'
            style={{
              color: '#9019a7',
              border: '1px solid rgba(144, 25, 167, 0.5)',
            }}
          >
            Read More...
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ArticlesCard;
