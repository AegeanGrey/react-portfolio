import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import united from '../assets/images/project-united.jpg';
import notes from '../assets/images/note-taker.jpg';
import cabinet from '../assets/images/cabinet-keeper.jpg';
import password from '../assets/images/password-generator.png';
import readme from '../assets/images/document-info.png';
import cat from '../assets/images/bowtie-cat.png';
import lead from '../assets/images/lead-generation.png';
import ghost from '../assets/images/ghostbusters.jpg';

function MediaCard() {
  return(
    <Grid margin={2} marginLeft={14} marginRight={14}>
    <Stack spacing={4} direction={'row'}>

      {/* Ghostbusters Card */}
      <Grid>
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={ghost}
          title='A black background with white ghost that has a red stop symbol he is trying to get through'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Ghostbusters Website
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            A collaborative nostalgia-fueled experience for locating and pinning ghosts sightings
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="http://triskaidekaphobia-48aedc7fe5ca.herokuapp.com" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/ashtreid/ghostbusters" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>
      </Grid>

      {/* Project United Card */}
      <Grid paddingBottom={10}>
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={united}
          title='A dark purple background with cream font of text that says Project United'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Project United
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            A community application to help find and support local LGBTQ+ friendly organizations in Utah
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://project-united.herokuapp.com" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/Childofrainydays/project-united" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>
      </Grid>

      {/* Cabinet Keepers Card */}
      <Grid>
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={cabinet}
          title='A white box with a black outline that has a red button bellow it saying Generate Password'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Cabinet Keepers
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            A group effort in aiding college students find recipes based on the ingredients they have in their pantry
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://aegeangrey.github.io/team-waffles/" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/AegeanGrey/team-waffles" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>
      </Grid>

      {/* Password Generator Card */}
      <Grid>
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={password}
          title='A white box with a black outline that has a red button bellow it saying Generate Password'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Password Generator
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            The most effective and effecient way of creating a new password with the logic of JavaScript
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://aegeangrey.github.io/password-generator/" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/AegeanGrey/password-generator" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>
      </Grid>
    </Stack>

    <Stack spacing={3} direction={'row'}>

      {/* Note Taker Card */}
      <Grid>
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={notes}
          title='A blue background with white font of text that says Note Taker'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Note Taker
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            An all in one place to write, save and retrieve your notes via JavaScript, JSON, and HTTP Requests
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://noteynotes-a2993dbf9bbe.herokuapp.com" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/AegeanGrey/note-taker" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>
      </Grid>

      {/* README Card */}
      <Grid>
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={readme}
          title='Sketch of a file with document'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            README Generator
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            A faster and reliable way to create brand new README.md files
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://github.com/AegeanGrey/readme-generator" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>
      </Grid>

      {/* Study Guide Card */}
      <Grid>
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
      </Grid>

      {/* Horiseon Card */}
      <Grid>
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={lead}
          title='Gear being processed into currency'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Horiseon (Sample Webpage)
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            Webpage with descriptive comments describing each semantic HTML element
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://aegeangrey.github.io/horiseon-mock-up/" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/AegeanGrey/horiseon-mock-up" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>
      </Grid>
    </Stack>
  </Grid>
  )
}

export default MediaCard
