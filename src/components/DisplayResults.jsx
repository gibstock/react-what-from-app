import React from 'react'
import ActorDisplay from './ActorDisplay';

const DisplayResults = ({actorResults, movieResults, showMovies, setShowMovies, movieFilter, filterItems}) => {
  return(
    <div className='display-results'>
      {(actorResults) && (
        Object.values(actorResults).map((actor) => {
          return (
            <ActorDisplay 
              actor={actor}
              showMovies={showMovies}
              setShowMovies={setShowMovies}
              movieResults={movieResults}
              key={actor.id}
              movieFilter={movieFilter}
              filterItems={filterItems}
            />
          ) 
        })
      )}
    </div>
  )
}

export default DisplayResults