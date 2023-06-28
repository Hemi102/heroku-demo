import Input from 'components/common/input';
import SelectComponent from 'components/common/select';
import {ErrorMessage, Formik} from 'formik';
import {Plus, Trash} from 'phosphor-react';
import React from 'react';
import ToggleButton from 'components/common/togglebutton';
import {questionsInitialValues as initialValues, questionsSchema as schema} from 'constants/questions';

const QuestionForm = ({handleQuestionSubmittion, handleClose, currentQuestionEdit}) => {
  return (
    <Formik
      initialValues={currentQuestionEdit ? currentQuestionEdit : initialValues}
      validationSchema={schema}
      onSubmit={values => {
        handleQuestionSubmittion(values);
      }}
      enableReinitialize
    >
      {({handleChange, values, handleSubmit, setFieldValue}) => {
        return (
          <div className="question-modal">
            <form className="form-main" onSubmit={handleSubmit}>
              <div>
                <Input
                  handleChange={handleChange}
                  placeholder="Question"
                  type="text"
                  label="Question"
                  value={values.description}
                  name="description"
                />
                <ErrorMessage component="p" name="description" />
              </div>
              <div className="mb-2">
                <SelectComponent
                  options={[
                    {value: 'multiple_choice', label: 'Multiple Choice'},
                    {value: 'dropdown', label: 'Dropdown'},
                  ]}
                  selectedValue={values.question_type}
                  placeholder="Select "
                  handleChange={obj => {
                    setFieldValue('question_type', obj.value);
                  }}
                />
                <ErrorMessage component="p" name="question_type" />
              </div>
              <div>
                {values.question_type &&
                  values.question_options?.map((item, index) => {
                    return (
                      <>
                        <p className="heading-xsb mt-4 mb-0">Add Option</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center  gap-2 ">
                            <span>{`${index + 1}. `}</span>{' '}
                            <Input
                              value={item.value}
                              placeholder="place value"
                              type="text"
                              handleChange={handleChange}
                              name={`question_options[${index}].value`}
                            />
                          </div>
                          <Trash
                            size={24}
                            onClick={() => {
                              setFieldValue(
                                'question_options',
                                values.question_options.filter((_, itemIndex) => itemIndex !== index),
                              );
                            }}
                          />
                        </div>
                        <ErrorMessage component="p" name={`question_options[${index}].value`} />
                      </>
                    );
                  })}
                {values.question_type && (
                  <button
                    className="secondary-btn"
                    type="butotn"
                    onClick={() => {
                      setFieldValue('question_options', [...values.question_options, {value: ''}]);
                    }}
                  >
                    {<Plus size={18} className="me-3" />}Add Option
                  </button>
                )}
              </div>
              <ToggleButton
                label="Question Status"
                handleChange={(name, value) => {
                  setFieldValue(name, !!value ? 'active' : 'inactive');
                }}
                value={values.status === 'active' ? 1 : 0}
                name="status"
              />
              <div className="action  gap-2">
                <button className="secondary-btn w-50" type="button" onClick={handleClose}>
                  Cancel
                </button>
                <input className="primary-btn w-50" type="submit" name="submit" value="Submit" />
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default QuestionForm;
