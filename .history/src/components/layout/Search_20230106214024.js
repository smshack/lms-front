import React from 'react'

const Search = () => {
  return (
    <div className='main-search container col-md-6 mb-3'>
        <input type='text' className='form-control' id='mainsearch' />
        <label for="mainsearch">State</label>
    </div>
  )
}

export default Search