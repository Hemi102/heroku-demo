import React, {useCallback, useEffect, useState} from 'react';
// import './questionlist.scss';
import {Pencil, Plus, Trash, TrashSimple, UploadSimple} from 'phosphor-react';
import TableWrapper from 'components/common/table-wrapper';
import {DEBOUNCE_DELAY, initialMetaForTable} from 'constants/common';
import {debounce} from 'lodash';
import CustomModal from 'components/common/modal';
import QuestionForm from './question-form';
import {createQuestion, deleteQuestion, getQuestions, updateQuestions} from 'containers/questions/api';
import moment from 'moment';

const Questionslist = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const [questionsList, setQuestionsList] = useState([]);
  const [meta, setMeta] = useState(initialMetaForTable);
  const [loading, setLoading] = useState(true);
  const [selectedQuestions, setSelectedQuestions] = useState(0);
  const [isQuestionsModalVisible, setIsQuestionModalvisible] = useState(false);
  const [currentQuestionEdit, setCurrentQuestionEdit] = useState('');
  const [refreshPage, setRefreshPage] = useState(false);
  console.log(loading);
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
  const handleRefreshPage = () => {
    setRefreshPage(pre => !pre);
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
    setCurrentQuestionEdit('');
  };
  const handleOpenQuestionModal = () => {
    setIsQuestionModalvisible(true);
  };
  const handleQuestionSubmittion = async question => {
    try {
      if (typeof currentQuestionEdit === 'object') {
        const {id} = question;
        const result = await updateQuestions(question, id);
        if (result) {
          handleCloseQuestionModal();
          handleRefreshPage();
        }
      } else {
        const result = await createQuestion(question);
        if (result) {
          handleCloseQuestionModal();
          handleRefreshPage();
        }
      }
    } catch (error) {}
  };
  const handleDeleteQuestion = async id => {
    const result = await deleteQuestion(id);
    if (result) handleRefreshPage();
  };
  const fetchQuestions = useCallback(async () => {
    const result = await getQuestions();

    if (result['questions']) {
      const data = result?.questions.map(item => ({...item, checked: selectAll}));
      setQuestionsList(data);
      setTotalCount(result?.meta.total_count);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshPage]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);
  useEffect(() => {
    setSelectedQuestions(
      selectAll
        ? questionsList.length
        : questionsList.reduce((accumulator, item) => {
            if (item.checked) {
              return accumulator + 1;
            } else return accumulator;
          }, 0),
    );
  }, [questionsList, selectAll]);

  return (
    <>
      <TableWrapper
        searchPlaceholder="Search Questions"
        setSearhQuery={handleSetSearchQuery}
        searchValue={meta.search}
        totalListCount={totalCount}
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
                          type="checkbox"
                          checked={question.checked}
                          onChange={event => handleCheckboxChange(index, event)}
                          value=""
                        />
                      </div>
                    </td>
                    <td>{question.description}</td>
                    <td>{question.question_type}</td>
                    <td>
                      <div className={`status ${question.status ? 'active' : 'inactive'}`}>
                        {question.status ? 'Active' : 'Inactive'}
                      </div>
                    </td>
                    <td>{moment(question.created_at).format('YYYY-MM-DD')}</td>
                    <td>{moment(question.updated_at).format('YYYY-MM-DD')}</td>
                    <td>
                      <Pencil
                        size={24}
                        className="opacity-50"
                        onClick={() => {
                          setCurrentQuestionEdit(question);
                          handleOpenQuestionModal();
                        }}
                        style={{cursor: 'pointer'}}
                      />
                      <Trash
                        size={24}
                        className="ms-3 opacity-50"
                        style={{cursor: 'pointer'}}
                        onClick={() => {
                          question?.id && handleDeleteQuestion(question.id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TableWrapper>
      {isQuestionsModalVisible && (
        <CustomModal
          size="sm"
          show
          onHide={handleCloseQuestionModal}
          heading={`${currentQuestionEdit ? 'Edit' : 'Add'} Question`}
        >
          <QuestionForm
            handleQuestionSubmittion={handleQuestionSubmittion}
            handleClose={handleCloseQuestionModal}
            currentQuestionEdit={currentQuestionEdit}
          />
        </CustomModal>
      )}
    </>
  );
};

export default Questionslist;
