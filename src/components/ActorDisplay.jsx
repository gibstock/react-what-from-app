import React from 'react'
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ActorHeadShot from './ActorHeadShot';

const ActorDisplay = ({actor, results, showMovies, setShowMovies}) => {
  return(
    <div className='actor-display'>
      <ActorHeadShot 
        actor={actor}
        setShowMovies={setShowMovies}
      />
      {(showMovies) && (
        <div className='actor-movies'>
          <div className='movie-container'>
            {Object.values(results[1].map((project) => {
              return (
                <Link href={project.link} underline="none">
                  <Card sx={{ minWidth: 275, marginTop: '.3em' }}>
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
      )}
    </div>
  )
}

export default ActorDisplay