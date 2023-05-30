import React from 'react';
import Actions from 'components/questions/Actions';
import Questionslist from 'components/questions/Questionslist';
const Questions = () => {
  return <>
  <div className='main-content'>
    <h1>Questions</h1>
    <Actions />
    <Questionslist />
  </div>
  </>
};

export default Questions;
