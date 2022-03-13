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
      <div className="search-container">
        <input 
          className='main-input'
          value={search}
          placeholder="Actor Name"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)} 
        />
        <Button 
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={() => handleSearchClick()}
          size='large'
          sx={{
            margin: "0 0",
            // padding: "1em",
            // color: "#000",
            // backgroundColor: 'hsl(50, 10%, 55%)',
            borderTopRightRadius: '25px',
            borderBottomRightRadius: '25px'
          }}>
            
        </Button>
      </div>
      <img src={From} alt="From" />
      <img src={Look} alt="Look" />
    </div>
  )
}

export default Header