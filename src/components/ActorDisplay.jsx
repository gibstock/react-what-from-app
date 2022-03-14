import React from 'react'
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ActorHeadShot from './ActorHeadShot';
import RoleChoice from './RoleChoice';

const ActorDisplay = ({fetchMoviePic, actor, movieResults, showMovies, setShowMovies, movieFilter, filterItems, handleActorSwitch, handleProducerSwitch, actorChecked, producerChecked, movieList}) => {

  
  return(
    <div className='actor-display' id='top'>
      <ActorHeadShot 
        actor={actor}
        setShowMovies={setShowMovies}
      />
      {(showMovies) && (
        <div className='actor-movies'>
          <div className='movie-container'>
            <input 
              className='secondary-search'
              placeholder={`Start typing to filter projects`}
              value={movieFilter}
              onChange={(e) => filterItems(e.target.value)}
            />
            <RoleChoice 
              handleActorSwitch={handleActorSwitch}
              handleProducerSwitch={handleProducerSwitch}
            />
            {Object.values(movieResults.map((project) => {
              // fetchMoviePic(project.title)
              if(producerChecked) {
                if(project.specialRole && project.specialRole.includes("producer")) {
                  return (
                    <Link href={project.link} underline="none">
                      <Card raised sx={{ minWidth: 275, marginTop: '.3em' }}>
                        <CardContent>
                          <Typography variant='overline' gutterBottom>
                            {project.specialRole.replace(/\(|\)|\./g, "")}
                          </Typography>
                          <Typography variant="h5" gutterBottom>
                            {project.title}
                          </Typography>
                          <Typography variant="body1" >
                            {project.year}
                          </Typography>
                        </CardContent>
                        {/* <Grid container
                          sx={{
                          background: '#000'
                          }}
                        >
                          <CardMedia 
                            component="img"
                            image={movieList}
                            alt={movieList}
                            sx={{
                              maxWidth: 178,
                              margin: 'auto',
                              background: '#fff',
                              padding: '1em'
                          }}
                          />
                        </Grid> */}
                      </Card>
                    </Link>
                  )
                } else if(project.tvRole && project.tvRole.includes("producer")) {
                  return (
                    <Link href={project.link} underline="none">
                      <Card raised sx={{ minWidth: 275, marginTop: '.3em' }}>
                        <CardContent>
                          <Typography variant='overline' gutterBottom>
                            {project.tvRole.replace(/\(|\)|\./g, "")}
                          </Typography>
                          <Typography variant="h5" gutterBottom>
                            {project.title}
                          </Typography>
                          <Typography variant="body1" >
                            {project.year}
                          </Typography>
                        </CardContent>
                        {/* <Grid container
                          sx={{
                          background: '#000'
                          }}
                        >
                          <CardMedia 
                            component="img"
                            image={movieList}
                            alt={movieList}
                            sx={{
                              maxWidth: 178,
                              margin: 'auto',
                              background: '#fff',
                              padding: '1em'
                          }}
                          />
                        </Grid> */}
                      </Card>
                    </Link>
                  )
                } 
              }
              if(actorChecked) {
                if((project.tvRole && !project.tvRole.includes("producer")) || project.role){
                  return (
                    <Link href={project.link} underline="none">
                      <Card raised sx={{ minWidth: 275, marginTop: '.3em' }}>
                        <CardContent>
                          <Typography variant="h5" gutterBottom>
                            {project.title}
                          </Typography>
                          <Typography variant="body1" >
                            {project.year}
                          </Typography>
                          {(project.role) && (
                          <Typography variant="body1" >
                            {project.role}
                          </Typography>
                          )}
                          {(project.tvRole) && (
                          <Typography variant="body1" >
                            {project.tvRole}
                          </Typography>
                          )}
                        </CardContent>
                        {/* <Grid container
                          sx={{
                          background: '#000'
                          }}
                        >
                          <CardMedia 
                            component="img"
                            image={movieList}
                            alt={movieList}
                            sx={{
                              maxWidth: 178,
                              margin: 'auto',
                              background: '#fff',
                              padding: '1em'
                          }}
                          />
                        </Grid> */}
                      </Card>
                    </Link>
                  )
                }
              }
              return null
            }))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ActorDisplay