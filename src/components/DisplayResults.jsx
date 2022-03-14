import React, { useState } from 'react'
import ActorDisplay from './ActorDisplay';

const DisplayResults = ({actorResults, movieResults, showMovies, setShowMovies, movieFilter, filterItems, fetchMoviePic, movieList}) => {
  const [actorChecked, setActorChecked] = useState(true)
  const [producerChecked, setProducerChecked] = useState(false)

  const handleActorSwitch = (e) => {
    setActorChecked(e.target.checked)
  }
  const handleProducerSwitch = (e) => {
    setProducerChecked(e.target.checked)
  }
  return(
    <div className='display-results' >
      {(actorResults) && (
        Object.values(actorResults).map((actor) => {
          return (
            <ActorDisplay 
              actor={actor}
              showMovies={showMovies}
              setShowMovies={setShowMovies}
              movieResults={movieResults}
              key={actor.name}
              movieFilter={movieFilter}
              filterItems={filterItems}
              actorChecked={actorChecked}
              producerChecked={producerChecked}
              handleActorSwitch={handleActorSwitch}
              handleProducerSwitch={handleProducerSwitch}
              fetchMoviePic={fetchMoviePic}
              movieList={movieList}
            />
          ) 
        })
      )}
    </div>
  )
}

export default DisplayResults