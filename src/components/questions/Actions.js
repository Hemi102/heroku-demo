import React from 'react'
import { Plus, UploadSimple, MagnifyingGlass } from 'phosphor-react';
import Input from 'components/common/input';

const Actions = () => {
  return (
    <div className='container-fluid py-4'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex flex-wrap align-items-center justify-content-between'>
            <div className='d-flex mt-2'>
              <Input 
                 Icon={MagnifyingGlass}
                className='' 
                type='search' 
                placeholder='Search Questions'>
              </Input>
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

