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
    <Card>
                <Grid container>
                    <CardMedia 
                      component="img"
                      image={profilePic}
                      alt={name}
                      sx={{
                        maxWidth: 400,
                        margin: 'auto'
                      }}
                    />
                </Grid>
                <CardContent>
                  <Typography variant='h2'>
                    {name}
                  </Typography>
                  <Link 
                    href={mainPage}
                    underline="none">IMDB Profile</Link>
                </CardContent>
                <CardActions>
                  <Button
                    variatnt="contained" 
                    sx={{
                      color: 'palette.primary.light',
                      marginTop: '1em',
                      marginBottom: '1em'
                    }}
                    startIcon={<VideoCameraFrontOutlinedIcon />}
                    onClick={() => setShowMovies(true)}
                    >Show Movies</Button>
                </CardActions>
              </Card>
  )
}

export default ActorHeadShot