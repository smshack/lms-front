import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchDollar} from '@fortawesome/free-solid-svg-icons'
const Search = () => {
  return (
    <div className='main-search container'>
        <div className='inputgroup'>
            <input type='text' className='form-control' id='mainsearch' />
            <button className='btn btn-outline-info'><label className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearchDollar} /></label></button>
        </div>
    </div>
  )
}

export default Search