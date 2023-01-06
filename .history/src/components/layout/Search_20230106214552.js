import React from 'react'

const Search = () => {
  return (
    <div className='main-search container'>
        <div className='inputgroup'>
            <input type='text' className='form-control' id='mainsearch' />
            <button><label class="input-group-text" id="basic-addon1">@</label></button>
        </div>
    </div>
  )
}

export default Search