import React, { useState } from 'react';
import './questionlist.scss';
import { Pencil, Trash } from 'phosphor-react';


const Questionslist = () => {
  const questions = [
    {
      text: 'What was the type of outreach?',
      type: 'Multiple Choice',
      dateCreated: 'Apr 3, 2023',
      dateUpdated: 'Dec 10, 2023',
    },
    {
      text: 'What was the duration of outreach?',
      type: 'Dropdown',
      dateCreated: 'Apr 3, 2023',
      dateUpdated: 'Dec 10, 2023',
    },
    {
      text: 'What was the type of outreach?',
      type: 'Multiple Choice',
      dateCreated: 'Apr 3, 2023',
      dateUpdated: 'Dec 10, 2023',
    },
    {
      text: 'What was the type of outreach?',
      type: 'Multiple Choice',
      dateCreated: 'Apr 3, 2023',
      dateUpdated: 'Dec 10, 2023',
    },
    {
      text: 'What was the type of outreach?',
      type: 'Multiple Choice',
      dateCreated: 'Apr 3, 2023',
      dateUpdated: 'Dec 10, 2023',
    },

  ];

  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState(questions.map((question) => ({
    ...question,
    checked: false,
  })));

  const handleSelectAll = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: !selectAll,
    }));
    setCheckboxes(updatedCheckboxes);
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    const checkbox = updatedCheckboxes[index];
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      setCheckboxes(updatedCheckboxes);
    }
  };



  return (
    <div className="container-fluid py-4">
      <div className="table-responsive">
        <table className="table table-rows">
          <thead className="table-header">
            <tr>
              <th>
                <div className="form-check ps-3 mb-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
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
            {checkboxes.map((checkbox, index) => (
              <tr key={index}>
                <td>
                  <div className="form-check ps-3 mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleCheckboxChange(index)}
                      value=""
                    />
                  </div>
                </td>
                <td>{checkbox.text}</td>
                <td>{checkbox.type}</td>
                <td>
                  <div className="success-status">{checkbox.status}</div>
                </td>
                <td>{checkbox.dateCreated}</td>
                <td>{checkbox.dateUpdated}</td>
                <td>
                  <Pencil size={24} className="opacity-50" />
                  <Trash size={24} className="ms-3 opacity-50" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Questionslist;
