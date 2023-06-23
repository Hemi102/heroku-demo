import React from 'react';
import Dashboardcontent from 'components/dashboard/Dashboardcontent';
import {CaretDown} from 'phosphor-react';
const Dashboard = () => {
  return <>
  <div className='main-content'>
    <div className='d-flex flex-row align-items-center justify-content-between'>
      <h1 className='ms-2'>Dashboard</h1>
      <div className='dropdown me-3'>
        <span className='text-nowrap fw-bold'>Last 7 Days</span>
        <CaretDown size={24}/>
      </div>
    </div>
    <Dashboardcontent />
  </div>
  </>
};

export default Dashboard;
