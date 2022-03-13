import React from 'react'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import WhatIs from '../images/what-is.png'
import From from '../images/from.png'
import Look from '../images/look.png'

const Header = ({search, setSearch, handleKeyDown, handleSearchClick}) => {
  return(
    <div className='flex-center'>
        <img src={WhatIs} alt="What is" />
        <input 
          className='main-input'
          value={search}
          placeholder="Actor Name"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)} 
        />
        <img src={From} alt="From" />
        <Button 
          variant="outlined"
          startIcon={<SearchIcon />}
          onClick={() => handleSearchClick()}
          sx={{
            margin: "1em 0",
            width: "90%",
            padding: "1em",
            color: "#fff",
          }}>Search</Button>
        <img src={Look} alt="Look" />
      </div>
  )
}

export default Header