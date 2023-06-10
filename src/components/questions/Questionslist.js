import React, {useCallback, useEffect, useState} from 'react';
// import './questionlist.scss';
import {Pencil, Plus, Trash, TrashSimple, UploadSimple} from 'phosphor-react';
import TableWrapper from 'components/common/table-wrapper';
import {DEBOUNCE_DELAY, initialMetaForTable} from 'constants/common';
import {debounce} from 'lodash';

const Questionslist = () => {
  const questions = [
    {
      text: 'What was the type of outreach?',
      type: 'Multiple Choice',
      Status: 'Active',
      dateCreated: 'Apr 3, 2023',
      dateUpdated: 'Dec 10, 2023',
    },
    {
      text: 'What was the duration of outreach?',
      type: 'Dropdown',
      Status: 'Active',
      dateCreated: 'Apr 3, 2023',
      dateUpdated: 'Dec 10, 2023',
    },
    {
      text: 'What was the type of outreach?',
      type: 'Multiple Choice',
      Status: 'Active',
      dateCreated: 'Apr 3, 2023',
      dateUpdated: 'Dec 10, 2023',
    },
    {
      text: 'What was the type of outreach?',
      type: 'Multiple Choice',
      Status: 'Active',
      dateCreated: 'Apr 3, 2023',
      dateUpdated: 'Dec 10, 2023',
    },
    {
      text: 'What was the type of outreach?',
      type: 'Multiple Choice',
      Status: 'Active',
      dateCreated: 'Apr 3, 2023',
      dateUpdated: 'Dec 10, 2023',
    },
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [questionsList, setQuestionsList] = useState(
    questions.map(question => ({
      ...question,
      checked: false,
    })),
  );
  const [meta, setMeta] = useState(initialMetaForTable);
  const [loading, setLoading] = useState(true);
  const [selectedQuestions, setSelectedQuestions] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(
    debounce(() => {
      setLoading(true);
    }, DEBOUNCE_DELAY),
    [meta.search],
  );

  const handleSetSearchQuery = value => {
    setMeta(pre => ({...pre, search: value}));
    debounceFn();
  };

  const handlePageChange = value => {
    setMeta(pre => ({...pre, page: value}));
    setLoading(true);
  };
  const handleSelectAll = () => {
    const updatedCheckboxes = questionsList.map(checkbox => ({
      ...checkbox,
      checked: !selectAll,
    }));
    setQuestionsList(updatedCheckboxes);
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = index => {
    setQuestionsList(pre =>
      pre.map((item, itemIndex) => (itemIndex === index ? {...item, checked: !item.checked} : item)),
    );
  };
  useEffect(() => {
    setSelectedQuestions(
      selectAll
        ? questionsList.length
        : questionsList.reduce((accumulator, item) => {
            if (item.checked) {
              console.log('checked');
              return accumulator + 1;
            } else return accumulator;
          }, 0),
    );
  }, [questionsList]);

  return (
    <TableWrapper
      searchPlaceholder="Search Questions"
      setSearhQuery={handleSetSearchQuery}
      searchValue={meta.search}
      totalListCount={100}
      pageSize={meta.perPage}
      currentPage={meta.page}
      onPageChange={handlePageChange}
      selectedItems={selectedQuestions}
      actionButtons={
        selectedQuestions > 0
          ? [
              {
                label: `Delete ${selectedQuestions} Items`,
                classes: 'danger-btn',
                icon: <TrashSimple size={24} className="me-3" />,
                handleClick: () => {},
              },
            ]
          : [
              {
                label: 'Upload File',
                classes: 'secondary-btn',
                icon: <UploadSimple size={24} className="me-3" />,
                handleClick: () => {},
              },
              {
                label: 'Add Questions',
                classes: 'primary-btn',
                icon: <Plus size={24} className="me-3" />,
                handleClick: () => {},
              },
            ]
      }
    >
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
              {questionsList.map((checkbox, index) => (
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
                    <div className="success-status">{checkbox.Status}</div>
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
    </TableWrapper>
  );
};

export default Questionslist;
