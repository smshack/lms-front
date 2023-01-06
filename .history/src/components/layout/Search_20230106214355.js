import React from 'react'

const Search = () => {
  return (
    <div className='main-search container'>
        <div className='col-md-6 mb-3 '>
            <input type='text' className='form-control' id='mainsearch' />
            <span class="input-group-text" id="basic-addon1">@</span>
        </div>
    </div>
  )
}

export default Search