import React from 'react'
import { Plus, UploadSimple, MagnifyingGlass } from 'phosphor-react';


const Actions = () => {
  return (
    <div className='container-fluid py-4'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex flex-wrap align-items-center justify-content-between'>
            <div className='d-flex mt-2'>
              <span>
                <MagnifyingGlass size={24} className='search-icon ms-3'/>
              </span>
              <input className='search-input flex-grow-1' type='search' placeholder='Search Questions'></input>
            </div>
            <div className='d-flex mt-2'>
              <button className='secendory-btn text-nowrap'>
                <UploadSimple size={24} className='me-3'/>
                Upload File
              </button>
              <button className='sm-btn text-nowrap ms-2'>
                <Plus size={24} className='me-3'/>
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

