import React, {useState} from 'react'
import axios from 'axios'
import WhatIs from './images/what-is.png'
import From from './images/from.png'
import Look from './images/look.png'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import './App.css'

const App = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState({})
  const [showMovies, setShowMovies] = useState(false)
  const URL = 'https://whatfromapi.herokuapp.com/actor/'


  const fetchData = async (actor) => {
    try{
      const response = await axios.get(`${URL}${actor}`)
      setResults(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  function handleSearchClick() {
    fetchData(search)
    setShowMovies(false)
    for(let member in results[0]) {
      delete results[0][member]
    }
  }

  return(
    <>
      <div className='header'>
        <img src={WhatIs} alt="What is" />
        <input 
          className='main-input'
          value={search}
          placeholder="Actor Name"
          onChange={(e) => setSearch(e.target.value)} 
        />
        <img src={From} alt="From" />
        <Button 
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={() => handleSearchClick()}>Search</Button>
        <img src={Look} alt="Look" />
      </div>
      <div className='display-results'>
        {(results[0]) ? (
          Object.values(results[0]).map((actor) => {
          return (
            <div className='actor-display'>
              <Card>
                <Grid Container>
                    <CardMedia 
                      component="img"
                      image={actor.profilePic}
                      alt={actor.name}
                      sx={{
                        maxWidth: 400,
                        margin: 'auto'
                      }}
                    />
                </Grid>
                <CardContent>
                  <Typography variant='h2'>
                    {actor.name}
                  </Typography>
                  <Link 
                    href={actor.mainPage}
                    underline="none">IMDB Profile</Link>
                </CardContent>
                <CardActions>
                  <Button
                    variatnt="contained" 
                    sx={{
                      color: 'palette.primary.light'
                    }}
                    startIcon={<VideoCameraFrontOutlinedIcon />}
                    onClick={() => setShowMovies(true)}>Show Movies</Button>
                </CardActions>
              </Card>
              {(showMovies) ? (
              <div className='actor-movies'>
                <div className='movie-container'>
                  {Object.values(results[1].map((project) => {
                    return (
                      <Link href={project.link}>
                        <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography variant="h5" gutterBottom>
                              {project.title}
                            </Typography>
                            <Typography variant="body1" >
                              {project.year}
                            </Typography>
                            <Typography variant="body1" >
                              {project.role}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  }))}
                </div>
              </div>
              ) : (
                null
              )}
            </div>
          ) 
        })
        ): (
          null
        )
      }
      </div>
    </>
  )
}

export default App