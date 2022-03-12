import React, {useState} from 'react'
import axios from 'axios'
import Header from './components/Header'
import DisplayResults from './components/DisplayResults'

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
  function handleKeyDown(e) {
    if(e.key === 'Enter') {
      handleSearchClick()
    }
  }

  return(
    <>
      <Header 
        search={search}
        setSearch={setSearch}
        handleKeyDown={handleKeyDown}
        handleSearchClick={handleSearchClick}
      />
      <DisplayResults 
        results={results}
        showMovies={showMovies}
        setShowMovies={setShowMovies}
      />
    </>
  )
}

export default App