import React from 'react'
import plusIcon from 'assets/images/plus-icon.svg';
import searchIcon from 'assets/images/search.svg';
import uploadIcon from 'assets/images/upload.svg';
import './actions.scss';

const Actions = () => {
  return (
    <div className='container-fluid py-4'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex flex-wrap align-items-center justify-content-between'>
            <div className='d-flex mt-2'>
              <span>
                <img className='search-icon ms-3' src={searchIcon} alt='' />
              </span>
              <input className='search-input flex-grow-1' type='search' placeholder='Search Questions'></input>
            </div>
            <div className='d-flex mt-2'>
              <button className='secendory-btn text-nowrap'>
                <img className='me-3' src={uploadIcon} alt='' />
                Upload File
              </button>
              <button className='sm-btn text-nowrap ms-2'>
                <img className='me-3' src={plusIcon} alt='' />
                Add Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Actions

