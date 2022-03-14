import React from 'react'

const Loader = () => {
  return(
    <div className='flex-center full'>
      <div className='loading-bar'>
        <div className='loading-fill'></div>
      </div>
      <div className='loading-text'>
        <span>Loading</span>
        <span id='l-dot-one'>.</span>
        <span id='l-dot-two'>.</span>
        <span id='l-dot-three'>.</span>
        <span id='l-dot-four'>.</span>
        <span id='l-dot-five'>.</span>
        <span id='l-dot-six'>.</span>
      </div>
    </div>
  )
}

export default Loader