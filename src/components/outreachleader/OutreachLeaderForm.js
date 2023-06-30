import Input from 'components/common/input';
import {outreachLeaderInitialValues, outreahLoaderSchema} from 'constants/outreachLeader';
import {ErrorMessage, Formik} from 'formik';

const OutreachForm = ({handleQuestionSubmittion, handleClose, currentOutreachLeeaderEdit}) => {
  return (
    <Formik
      initialValues={
        typeof currentOutreachLeeaderEdit === 'object' ? currentOutreachLeeaderEdit : outreachLeaderInitialValues
      }
      validationSchema={outreahLoaderSchema}
      onSubmit={values => {
        handleQuestionSubmittion(values);
      }}
    >
      {({handleChange, values, handleSubmit}) => {
        return (
          <div className="question-modal">
            <form className="form-main" onSubmit={handleSubmit}>
              <div className="d-flex justify-content-between">
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="Name"
                    type="text"
                    label="Name"
                    value={values.full_name}
                    name="full_name"
                  />
                  <ErrorMessage component="p" name="full_name" />
                </div>
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="Email"
                    type="text"
                    label="Email"
                    value={values.email}
                    name="email"
                  />
                  <ErrorMessage component="p" name="email" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="Username"
                    type="text"
                    label="Username"
                    value={values.username}
                    name="username"
                  />
                  <ErrorMessage component="p" name="username" />
                </div>
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="Enter Password"
                    type="password"
                    label="Password"
                    value={values.password}
                    name="password"
                  />
                  <ErrorMessage component="p" name="password" />
                </div>
              </div>
              <Input
                handleChange={handleChange}
                placeholder="Default Location"
                type="text"
                label="Default Location"
                value={values.location}
                name="location"
              />
              <ErrorMessage component="p" name="location" />

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

export default OutreachForm;
