import React, {useCallback, useEffect, useState} from 'react';
// import './questionlist.scss';
import {Pencil, Plus, Trash, TrashSimple, UploadSimple} from 'phosphor-react';
import TableWrapper from 'components/common/table-wrapper';
import {DEBOUNCE_DELAY, initialMetaForTable} from 'constants/common';
import {debounce} from 'lodash';
import CustomModal from 'components/common/modal';
import AddQuestionForm from './add-question-form';

const getQuestion = (question = '', questionType = 'Multiple Choice', options = [], status = false) => {
  return {
    question,
    questionType,
    dateCreated: 'Apr 3, 2023',
    dateUpdated: 'Dec 10, 2023',
    options: options,
    status: status,
  };
};
const Questionslist = () => {
  const questions = [
    getQuestion('What was the type of outreach?', 'Multiple Choice', [{option: '', answer: false}], false),
    getQuestion('What was the type of outreach?', 'Multiple Choice', [{option: '', answer: false}], false),
    getQuestion('What was the type of outreach?', 'Multiple Choice', [{option: '', answer: false}], false),
    getQuestion('What was the type of outreach?', 'Multiple Choice', [{option: '', answer: false}], false),
    getQuestion('What was the type of outreach?', 'Multiple Choice', [{option: '', answer: false}], false),
    getQuestion('What was the type of outreach?', 'Multiple Choice', [{option: '', answer: false}], false),
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [questionsList, setQuestionsList] = useState(
    questions.map(question => ({
      ...question,
      checked: false,
    })),
  );
  console.log('questions list ', questionsList);
  const [meta, setMeta] = useState(initialMetaForTable);
  const [loading, setLoading] = useState(true);
  const [selectedQuestions, setSelectedQuestions] = useState(0);
  const [isQuestionsModalVisible, setIsQuestionModalvisible] = useState(false);
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
  const handleCloseQuestionModal = () => {
    setIsQuestionModalvisible(false);
  };
  const handleOpenQuestionModal = () => {
    setIsQuestionModalvisible(true);
  };
  const handleQuestionSubmittion = question => {
    setQuestionsList(pre => [
      ...pre,
      getQuestion(question.question, question.questionType, question.options, question.status),
    ]);
    handleCloseQuestionModal();
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
    <>
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
                  handleClick: () => {
                    console.log('clicked');
                    handleOpenQuestionModal();
                  },
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
                {questionsList.map((question, index) => (
                  <tr key={index}>
                    <td>
                      <div className="form-check ps-3 mb-0">
                        <input
                          className="form-check-input"
                          type="question"
                          checked={question.checked}
                          onChange={() => handleCheckboxChange(index)}
                          value=""
                        />
                      </div>
                    </td>
                    <td>{question.question}</td>
                    <td>{question.questionType}</td>
                    <td>
                      <div className="success-status">{question.status ? 'Active' : 'Inactive'}</div>
                    </td>
                    <td>{question.dateCreated}</td>
                    <td>{question.dateUpdated}</td>
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
      {isQuestionsModalVisible && (
        <CustomModal size="sm" show onHide={handleCloseQuestionModal} heading="Add Question">
          <AddQuestionForm handleQuestionSubmittion={handleQuestionSubmittion} handleClose={handleCloseQuestionModal} />
        </CustomModal>
      )}
    </>
  );
};

export default Questionslist;
