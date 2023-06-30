import Input from 'components/common/input';
import {memberInitialValues, memberSchema} from 'constants/members';
import {ErrorMessage, Formik} from 'formik';

const AddQuestionForm = ({handleQuestionSubmittion, handleClose}) => {
  return (
    <Formik
      initialValues={memberInitialValues}
      validationSchema={memberSchema}
      onSubmit={values => {
        handleQuestionSubmittion(values);
      }}
    >
      {({handleChange, values, handleSubmit, errors}) => {
        console.log('errors', errors);
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
                    value={values.name}
                    name="name"
                  />
                  <ErrorMessage component="p" name="name" />
                </div>
                <div style={{width: '44%'}}>
                  <Input
                    handleChange={handleChange}
                    type="date"
                    label="Date of Birth"
                    name="date_of_birth"
                    placeholderText="Date of Birth"
                  />
                  <ErrorMessage component="p" name="date_of_birth" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="City"
                    type="text"
                    label="City"
                    value={values.city}
                    name="city"
                  />
                  <ErrorMessage component="p" name="city" />
                </div>
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="cin"
                    type="text"
                    label="cin"
                    value={values.cin}
                    name="cin"
                  />
                  <ErrorMessage component="p" name="cin" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="MIF"
                    type="text"
                    label="mif"
                    value={values.mif}
                    name="mif"
                  />
                  <ErrorMessage component="p" name="mif" />
                </div>
                <div class="mif-otr row">
                  <label htmlFor="mif_status">MIF Status</label>
                  <div className="select-wrapper">
                    <select
                      id="mif_status"
                      name="mif_status"
                      className="theme-input"
                      value={values.mif_status}
                      onChange={handleChange}
                    >
                      <option value="">MIF status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <ErrorMessage component="p" name="mif_status" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="account_number"
                    type="text"
                    label="account_number"
                    value={values.account_number}
                    name="account_number"
                  />
                  <ErrorMessage component="p" name="account_number" />
                </div>

                <div class="enrollment-otr row">
                  <label htmlFor="enrollment_status">Enrollment</label>
                  <div class="select-wrapper">
                    <select
                      id="enrollment_status"
                      name="enrollment_status"
                      class="theme-input"
                      value={values.enrollment_status}
                      onChange={handleChange}
                    >
                      <option value="">Enrol status</option>
                      <option value="Excluded">Excluded</option>
                      <option value="Enrolled">Enrolled</option>
                      <option value="pending">pending</option>
                    </select>
                  </div>
                  <ErrorMessage component="p" name="enrollment_status" />
                </div>
              </div>
              <hr />
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

export default AddQuestionForm;
