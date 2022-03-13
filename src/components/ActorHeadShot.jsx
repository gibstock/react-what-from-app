import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';


const ActorHeadShot = ({actor: {profilePic, name, mainPage}, setShowMovies}) => {
  return(
    <Card raised
      sx={{
        marginTop: '1em'
      }}
    >
      <Grid container
        sx={{
          background: '#000'
        }}
      >
        <CardMedia 
          component="img"
          image={profilePic}
          alt={name}
          sx={{
            maxWidth: 178,
            margin: 'auto',
            background: '#fff',
            padding: '1em'
          }}
        />
      </Grid>
      <CardContent>
        <Typography variant='h2' align='center'>
          {name}
        </Typography>
        <Grid container justifyContent='center'>
          <Link href={mainPage}>
            IMDB Profile
          </Link>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justifyContent='center'>
          <Button
            variant="outlined" 
            // color='secondary'
            size='large'
            sx={{
              marginTop: '1em',
              marginBottom: '1em'
            }}
            startIcon={<VideoCameraFrontOutlinedIcon />}
            onClick={() => setShowMovies(true)}>
              Show Projects
          </Button>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default ActorHeadShot