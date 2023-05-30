import React from 'react'
import './questionlist.scss';
import editIcon from 'assets/images/edit.svg';
import delIcon from 'assets/images/delete.svg';

const Questionslist = () => {
  return (
    <div className="container-fluid py-4">
        <div className="table-responsive">
          <table className="table table-rows">
            <thead className="table-header">
              <tr>
                <th>
                  <div className="form-check ps-3 mb-0">
                    <input className="form-check-input" type="checkbox" value=""/>
                  </div>
                </th>
                <th>Question</th>
                <th>Type</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Date Update</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="form-check ps-3 mb-0">
                    <input className="form-check-input" type="checkbox" value=""/>
                  </div>
                </td>
                <td>What was the type of outreach?</td>
                <td>Multiple Choice</td>
                <td><div className="success-status">Active</div></td>
                <td>Apr 3, 2023</td>
                <td>Dec 10, 2023</td>
                <td>
                  <img className='opacity-50' src={editIcon} alt=''/>
                  <img className='ms-3 opacity-50' src={delIcon} alt=''/>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check ps-3 mb-0">
                    <input className="form-check-input" type="checkbox" value=""/>
                  </div>
                </td>
                <td>What was the duration of outreach?</td>
                <td>Dropdown</td>
                <td><div className="success-status">Active</div></td>
                <td>Apr 3, 2023</td>
                <td>Dec 10, 2023</td>
                <td>
                  <img className='opacity-50' src={editIcon} alt=''/>
                  <img className='ms-3 opacity-50' src={delIcon} alt=''/>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check ps-3 mb-0">
                    <input className="form-check-input" type="checkbox" value=""/>
                  </div>
                </td>
                <td>What was the type of outreach?</td>
                <td>Multiple Choice</td>
                <td><div className="success-status">Active</div></td>
                <td>Apr 3, 2023</td>
                <td>Dec 10, 2023</td>
                <td>
                  <img className='opacity-50' src={editIcon} alt=''/>
                  <img className='ms-3 opacity-50' src={delIcon} alt=''/>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check ps-3 mb-0">
                    <input className="form-check-input" type="checkbox" value=""/>
                  </div>
                </td>
                <td>What was the type of outreach?</td>
                <td>Multiple Choice</td>
                <td><div className="success-status">Active</div></td>
                <td>Apr 3, 2023</td>
                <td>Dec 10, 2023</td>
                <td>
                  <img className='opacity-50' src={editIcon} alt=''/>
                  <img className='ms-3 opacity-50' src={delIcon} alt=''/>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check me-2 ps-3 mb-0">
                    <input className="form-check-input" type="checkbox" value=""/>
                  </div>
                </td>
                <td>What was the type of outreach?</td>
                <td>Multiple Choice</td>
                <td><div className="success-status">Active</div></td>
                <td>Apr 3, 2023</td>
                <td>Dec 10, 2023</td>
                <td>
                  <img className='opacity-50' src={editIcon} alt=''/>
                  <img className='ms-3 opacity-50' src={delIcon} alt=''/>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>
  )
}

export default Questionslist
