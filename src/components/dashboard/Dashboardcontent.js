import React from 'react'
import { Check, HourglassSimple, Question, CircleNotch } from 'phosphor-react';
import './dashboard.scss';

const Dashboardcontent = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-3">
          <div className="state-card">
            <div className="d-flex flex-column">
              <p className="opacity-50">Surveys completed</p>
              <div className="d-flex justify-content-between align-items-center flex-row">
                <p className="f-w">134</p>
                <Check size={40} className='clr' />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-3">
          <div className="state-card">
            <div className="d-flex flex-column">
              <p className="opacity-50">Surveys in progress</p>
              <div className="d-flex justify-content-between align-items-center flex-row">
                <p className="f-w">134</p>
                <CircleNotch size={40} className='clr' />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-3">
          <div className="state-card">
            <div className="d-flex flex-column">
              <p className="opacity-50">Surveys Pending</p>
              <div className="d-flex justify-content-between align-items-center flex-row">
                <p className="f-w">134</p>
                <HourglassSimple size={40} className='clr' />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-3">
          <div className="state-card">
            <div className="d-flex flex-column">
              <p className="opacity-50">Total Questions</p>
              <div className="d-flex justify-content-between align-items-center flex-row">
                <p className="f-w">134</p>
                <Question size={40} className='clr' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title p-3">Survey Results</h3>
              <hr />
              <div className="card-body p-3">
                <div className='container-fluid'>
                  <div className='d-flex flex-column justify-content-between flex-xl-row flex-xxl-row'>
                    <div className='d-flex flex-column'>
                      <p className='opacity-50'>Question No.1 of 7</p>
                      <h4>What was the type of Outreach?</h4>

                      <div className="progress progress-width d-flex justify-content-between">
                        <div className="progress-bar" role="progressbar" style={{ width: '54%' }}>
                          <div className='ps-3'>Phone Call</div>
                        </div>
                        <div className='progress-percent'>54%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '40%' }}>
                          <div className='ps-3'>Text messages</div>
                        </div>
                        <div className='progress-percent'>40%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '30%' }}>
                          <div className='ps-3'>Email</div>
                        </div>
                        <div className='progress-percent'>30%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '73%' }}>
                          <div className='ps-3'>Mail</div>
                        </div>
                        <div className='progress-percent'>73%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '30%' }}>
                          <div className='ps-3'>In Person</div>
                        </div>
                        <div className='progress-percent'>30%</div>
                      </div>
                    </div>
                    <div className='d-flex flex-column'>
                      <p className='opacity-50'>Question No.2 of 7</p>
                      <h4>What was the duration of Outreach?</h4>

                      <div className="progress progress-width d-flex justify-content-between">
                        <div className="progress-bar" role="progressbar" style={{ width: '54%' }}>
                          <div className='ps-3'>30 Minutes</div>
                        </div>
                        <div className='progress-percent'>54%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '40%' }}>
                          <div className='ps-3'>1 Hour</div>
                        </div>
                        <div className='progress-percent'>40%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '30%' }}>
                          <div className='ps-3'>3 Hours</div>
                        </div>
                        <div className='progress-percent'>30%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '73%' }}>
                          <div className='ps-3'>4 Hours</div>
                        </div>
                        <div className='progress-percent'>73%</div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='d-flex flex-column justify-content-between flex-xl-row flex-xxl-row'>
                    <div className='d-flex flex-column'>
                      <p className='opacity-50'>Question No.3 of 7</p>
                      <h4>What was the result of Outreach?</h4>

                      <div className="progress progress-width d-flex justify-content-between">
                        <div className="progress-bar" role="progressbar" style={{ width: '54%' }}>
                          <div className='ps-3'>Successful</div>
                        </div>
                        <div className='progress-percent'>54%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '40%' }}>
                          <div className='ps-3'>UnSuccessful</div>
                        </div>
                        <div className='progress-percent'>40%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '30%' }}>
                          <div className='ps-3'>Neutral</div>
                        </div>
                        <div className='progress-percent'>30%</div>
                      </div>
                    </div>
                    <div className='d-flex flex-column'>
                      <p className='opacity-50'>Question No.4 of 7</p>
                      <h4>What is the name of Lead Care manager?</h4>

                      <div className="progress progress-width d-flex justify-content-between">
                        <div className="progress-bar" role="progressbar" style={{ width: '54%' }}>
                          <div className='ps-3'>Gary Snow</div>
                        </div>
                        <div className='progress-percent'>54%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '40%' }}>
                          <div className='ps-3'>Gary Snow</div>
                        </div>
                        <div className='progress-percent'>40%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '30%' }}>
                          <div className='ps-3'>Gary Snow</div>
                        </div>
                        <div className='progress-percent'>30%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '73%' }}>
                          <div className='ps-3'>Gary Snow</div>
                        </div>
                        <div className='progress-percent'>73%</div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='d-flex flex-column justify-content-between flex-xl-row flex-xxl-row'>
                    <div className='d-flex flex-column'>
                      <p className='opacity-50'>Question No.5 of 7</p>
                      <h4>Was the Intro of Call Successful?</h4>

                      <div className="progress progress-width d-flex justify-content-between">
                        <div className="progress-bar" role="progressbar" style={{ width: '54%' }}>
                          <div className='ps-3'>Yes</div>
                        </div>
                        <div className='progress-percent'>54%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '40%' }}>
                          <div className='ps-3'>No</div>
                        </div>
                        <div className='progress-percent'>40%</div>
                      </div>
                    </div>
                    <div className='d-flex flex-column align-items-start'>
                      <p className='opacity-50'>Question No.6 of 7</p>
                      <h4>What is the status of ECM?</h4>

                      <div className="progress progress-width d-flex justify-content-between">
                        <div className="progress-bar" role="progressbar" style={{ width: '54%' }}>
                          <div className='ps-3'>EX</div>
                        </div>
                        <div className='progress-percent'>54%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '40%' }}>
                          <div className='ps-3'>EN</div>
                        </div>
                        <div className='progress-percent'>40%</div>
                      </div>
                      <div className="progress progress-width d-flex justify-content-between mt-3">
                        <div className="progress-bar" role="progressbar" style={{ width: '30%' }}>
                          <div className='ps-3'>OU</div>
                        </div>
                        <div className='progress-percent'>30%</div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='d-flex flex-column'>
                    <p className='opacity-50'>Question No.7 of 7</p>
                    <h4>What is the population of focus?</h4>

                    <div className="progress w-75 d-flex justify-content-between">
                      <div className="progress-bar" role="progressbar" style={{ width: '54%' }}>
                        <div className='ps-3'>Homeless</div>
                      </div>
                      <div className='progress-percent'>54%</div>
                    </div>
                    <div className="progress w-75 d-flex justify-content-between mt-3">
                      <div className="progress-bar" role="progressbar" style={{ width: '40%' }}>
                        <div className='ps-3'>High utilizers (Adults)</div>
                      </div>
                      <div className='progress-percent'>40%</div>
                    </div>
                    <div className="progress w-75 d-flex justify-content-between mt-3">
                      <div className="progress-bar" role="progressbar" style={{ width: '54%' }}>
                        <div className='ps-3'>SMI/Substance use disorder</div>
                      </div>
                      <div className='progress-percent'>54%</div>
                    </div>
                    <div className="progress w-75 d-flex justify-content-between mt-3">
                      <div className="progress-bar" role="progressbar" style={{ width: '40%' }}>
                        <div className='ps-3'>Nursing facility diversion?</div>
                      </div>
                      <div className='progress-percent'>40%</div>
                    </div>
                    <div className="progress w-75 d-flex justify-content-between mt-3">
                      <div className="progress-bar" role="progressbar" style={{ width: '30%' }}>
                        <div className='ps-3'>Nursing facility transition?</div>
                      </div>
                      <div className='progress-percent'>30%</div>
                    </div>
                    <div className="progress w-75 d-flex justify-content-between mt-3">
                      <div className="progress-bar" role="progressbar" style={{ width: '73%' }}>
                        <div className='ps-3'>Jail transition adults?</div>
                      </div>
                      <div className='progress-percent'>73%</div>
                    </div>
                    <div className="progress w-75 d-flex justify-content-between mt-3">
                      <div className="progress-bar" role="progressbar" style={{ width: '30%' }}>
                        <div className='ps-3'>Children and Youth?</div>
                      </div>
                      <div className='progress-percent'>30%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboardcontent;

