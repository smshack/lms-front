import React from 'react'

const Search = () => {
  return (
    <div className='main-search container'>
        <div className='col-md-6 mb-3 '>
            <input type='text' className='input-group-text' id='mainsearch' />
            <label for="mainsearch">State</label>
        </div>
    </div>
  )
}

export default Search