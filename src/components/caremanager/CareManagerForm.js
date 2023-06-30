import Input from 'components/common/input';
import {careManagerInitialValues, careManagerSchema} from 'constants/careManager';
import {ErrorMessage, Formik} from 'formik';
import {CaretDown} from 'phosphor-react';
import React from 'react';

const CareManagerForm = ({handleQuestionSubmittion, handleClose, currentLeadCareManagerEdit}) => {
  return (
    <Formik
      initialValues={
        typeof currentLeadCareManagerEdit === 'object' ? currentLeadCareManagerEdit : careManagerInitialValues
      }
      validationSchema={careManagerSchema}
      onSubmit={values => {
        handleQuestionSubmittion(values);
      }}
    >
      {({handleChange, values, handleSubmit, errors}) => {
        const customHandleChange = event => {
          const {name, value} = event.target;
          if (name === 'capacity') {
            const parsedValue = parseInt(value, 10);
            handleChange({
              target: {
                name,
                value: isNaN(parsedValue) ? '' : parsedValue,
              },
            });
          } else {
            handleChange(event);
          }
        };
        console.log('errors are', errors);
        console.log('values are', values);
        return (
          <div className="question-modal">
            <form className="form-main" onSubmit={handleSubmit}>
              <div className="d-flex justify-content-between">
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="Name"
                    type="text"
                    label="Lead Care manager Name"
                    value={values.name}
                    name="name"
                  />
                  <ErrorMessage component="p" name="name" />
                </div>
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="Name"
                    type="text"
                    label="Care coordinator Name"
                    value={values.care_coordinator_name}
                    name="care_coordinator_name"
                  />
                  <ErrorMessage component="p" name="care_coordinator_name" />
                </div>
              </div>
              <div>
                <Input
                  handleChange={handleChange}
                  placeholder="Email"
                  type="email"
                  label="Email"
                  value={values.email}
                  name="email"
                />
                <ErrorMessage component="p" name="email" />
              </div>
              <div>
                <Input
                  handleChange={handleChange}
                  placeholder="Location"
                  type="text"
                  label="Location(s)"
                  value={values.location}
                  name="location"
                />
                <ErrorMessage component="p" name="location" />
              </div>
              <div>
                <div className="input-wrapper">
                  <Input
                    handleChange={customHandleChange}
                    placeholder="Capacity Limit"
                    type="text"
                    label="Capacity Limit"
                    value={values.capacity !== '' ? `${values.capacity}` : ''}
                    name="capacity"
                  />
                  <CaretDown className="caret-down-icon opacity-50" />
                </div>

                <ErrorMessage component="p" name="capacity" />
              </div>
              <div className="action gap-2">
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

export default CareManagerForm;
