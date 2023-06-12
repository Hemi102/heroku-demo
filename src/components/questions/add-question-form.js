import Input from 'components/common/input';
import SelectComponent from 'components/common/select';
import {ErrorMessage, Formik} from 'formik';
import {Plus, Trash} from 'phosphor-react';
import React from 'react';
import ToggleButton from 'components/common/togglebutton';
import * as yup from 'yup';

const schema = yup.object().shape({
  question: yup.string().required(),
  questionType: yup.string().required(),
  options: yup
    .array()
    .of(
      yup.object().shape({
        option: yup.string().required('Required *'),
        answer: yup.boolean().required(),
      }),
    )
    .when('questionType', {
      is: 'selected',
      then: yup.array().of(
        yup.object().shape({
          option: yup.string().required('Required *'),
          answer: yup.boolean().required(),
        }),
      ),
    }),
  status: yup.boolean().required(),
});
const AddQuestionForm = ({handleQuestionSubmittion, handleClose}) => {
  return (
    <Formik
      initialValues={{question: '', questionType: '', options: [{option: '', answer: false}], status: true}}
      validationSchema={schema}
      onSubmit={values => {
        handleQuestionSubmittion(values);
      }}
    >
      {({handleChange, values, handleSubmit, setFieldValue, errors}) => {
        console.log('errors are ', errors);
        console.log('values  are', values);
        return (
          <div className="question-modal">
            <form className="form-main" onSubmit={handleSubmit}>
              <div>
                <Input
                  handleChange={handleChange}
                  placeholder="Question"
                  type="text"
                  label="Question"
                  value={values.question}
                  name="question"
                />
                <ErrorMessage component="p" name="question" />
              </div>
              <div>
                <SelectComponent
                  options={[
                    {value: 'multiple-choice', label: 'Multiple Choice'},
                    {value: 'dropdown', label: 'Dropdown'},
                  ]}
                  selectedValue={values.questionType}
                  placeholder="Select "
                  handleChange={obj => {
                    setFieldValue('questionType', obj.value);
                  }}
                />
                <ErrorMessage component="p" name="questionType" />
              </div>
              <div>
                {values.questionType &&
                  values.options.map((item, index) => {
                    return (
                      <>
                        <p className="heading-xsb mt-4 mb-0">Add Option</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center  gap-2 ">
                            <span>{`${index + 1}. `}</span>{' '}
                            <Input
                              value={item.option}
                              placeholder="place value"
                              type="text"
                              handleChange={handleChange}
                              name={`options[${index}].option`}
                            />
                          </div>
                          <Trash
                            size={24}
                            onClick={() => {
                              setFieldValue(
                                'options',
                                values.options.filter((_, itemIndex) => itemIndex !== index),
                              );
                            }}
                          />
                        </div>
                        <ErrorMessage component="p" name={`options[${index}].option`} />
                      </>
                    );
                  })}
                {values.questionType && (
                  <button
                    className="secondary-btn"
                    type="butotn"
                    onClick={() => {
                      setFieldValue('options', [...values.options, {option: '', answer: false}]);
                    }}
                  >
                    {<Plus size={18} className="me-3" />}Add Option
                  </button>
                )}
              </div>
              <ToggleButton
                label="Question Status"
                handleChange={(name, value) => {
                  setFieldValue(name, value);
                }}
                value={values.status}
                name="status"
              />
              <div className="action  gap-2">
                <input className="primary-btn w-50" type="submit" name="submit" value="Submit" />
                <button className="secondary-btn w-50" type="button" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default AddQuestionForm;
