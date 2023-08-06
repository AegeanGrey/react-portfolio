import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import cat from '../assets/images/bowtie-cat.png';

function MediaCard() {
  return(
    <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
      <CardMedia 
        sx={{ height: 194 }}
        image={cat}
        title='cat with a bowtie'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Pre-Work Study Guide
        </Typography>
        <Typography gutterBottom variant='h5' color='text.secondary'>
          An application designed to help students study HTML, CSS and JavaScript
        </Typography>
        </CardContent>
      <CardActions>
        <Button size="large" href="https://aegeangrey.github.io/prework-study-guide/" rel='noopener noreferrer' target="_blank">Application</Button>
        <Button size="large" href="https://github.com/AegeanGrey/prework-study-guide" rel='noopener noreferrer' target="_blank">Github Repository</Button>
      </CardActions>
    </Card>
  )
}

export default MediaCard
