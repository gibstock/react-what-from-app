import React from 'react'
import ActorDisplay from './ActorDisplay';

const DisplayResults = ({results, showMovies, setShowMovies}) => {
  return(
    <div className='display-results'>
      {(results[0]) && (
        Object.values(results[0]).map((actor) => {
          return (
            <ActorDisplay 
              actor={actor}
              showMovies={showMovies}
              setShowMovies={setShowMovies}
              results={results}
              key={actor.id}
            />
          ) 
        })
      )}
    </div>
  )
}

export default DisplayResults