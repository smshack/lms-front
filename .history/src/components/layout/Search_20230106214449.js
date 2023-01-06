import React from 'react'

const Search = () => {
  return (
    <div className='main-search container'>
        <div className='inputgroup'>
            <input type='text' className='form-control' id='mainsearch' />
            <span class="input-group-text" id="basic-addon1">@</span>
        </div>
    </div>
  )
}

export default Search