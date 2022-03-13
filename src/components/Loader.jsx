import React from 'react'

const Loader = () => {
  return(
    <div className='flex-center full'>
      <span className='loading-bar'>
        <span className='loading-fill'></span>
      </span>
      <span className='loading-text'>Loading...</span>
    </div>
  )
}

export default Loader