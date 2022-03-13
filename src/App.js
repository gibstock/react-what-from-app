import React, {useState} from 'react'
import axios from 'axios'
import Header from './components/Header'
import DisplayResults from './components/DisplayResults'
import Loader from './components/Loader'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Fab from '@mui/material/Fab';

import './App.css'

const App = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState({})
  const [filteredResults, setFilteredResults] = useState([])
  const [showMovies, setShowMovies] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [movieFilter, setMovieFilter] = useState('')
  const URL = 'https://whatfromapi.herokuapp.com/actor/'


  const fetchData = async (actor) => {
    try{
      const response = await axios.get(`${URL}${actor}`)
      setResults(response.data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  function handleSearchClick() {
    setIsLoading(true)
    fetchData(search)
    setShowMovies(false)
    for(let member in results[0]) {
      delete results[0][member]
    }
  }
  function handleKeyDown(e) {
    if(e.key === 'Enter') {
      handleSearchClick()
    }
  }
  const filterItems = (searchValue) => {
    setMovieFilter(searchValue)
    if(movieFilter.length > 0){
      const filteredData = results[1].filter((project) => {
        return project.title.toLowerCase().includes(movieFilter.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(results[1])
    }
  }
  return(
    <>
      {(isLoading) ? (
        <Loader />
      ) : (
        <>
          <Header 
            search={search}
            setSearch={setSearch}
            handleKeyDown={handleKeyDown}
            handleSearchClick={handleSearchClick}
          />
          <Fab 
            className='to-top'
            color='primary' 
            href='#top'
            sx={{
              position: 'fixed',
              bottom: '5px',
              right: '5px'
          }}>
            <ArrowUpwardIcon />
          </Fab>
          {(movieFilter.length > 0)? (
            <DisplayResults 
              actorResults={results[0]}
              movieResults={filteredResults}
              showMovies={showMovies}
              setShowMovies={setShowMovies}
              movieFilter={movieFilter}
              filterItems={filterItems}
            />

          ):(
            <DisplayResults 
              actorResults={results[0]}
              movieResults={results[1]}
              showMovies={showMovies}
              setShowMovies={setShowMovies}
              movieFilter={movieFilter}
              filterItems={filterItems}
            />
          )
        }
        </>
      )}
    </>
  )
}

export default App