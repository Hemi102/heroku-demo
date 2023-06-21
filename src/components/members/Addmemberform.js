import Input from 'components/common/input';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object().shape({
  name: yup.string().required(),
  DateOfBirth: yup.string().required(),
  city: yup.string().required(),
  CIN: yup.string().required(),
  MIF: yup.string().required(),
  Accounts: yup.string().required(),
  MIFstatus: yup.string().required(),
  Enrollmentstatus: yup.string().required(),
});


const AddQuestionForm = ({ handleQuestionSubmittion, handleClose }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        DateOfBirth: '',
        city: '',
        CIN: '',
        MIF: '',
        Accounts: '',
        MIFstatus: '',
        Enrollmentstatus: '',
      }}

      validationSchema={schema}
      onSubmit={values => {
        handleQuestionSubmittion(values);
      }}
    >
      {({ handleChange, setFieldValue, values, handleSubmit, errors }) => {

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
                    label="Name"
                    value={values.name}
                    name="name"
                  />
                  <ErrorMessage component="p" name="name" />
                </div>
                <div style={{ width: '44%' }}>
                  <Input
                    handleChange={handleChange}
                    type="date"
                    label="Date of Birth"
                    name="DateOfBirth"
                    placeholderText="Date of Birth"
                  />
                  <ErrorMessage component="p" name="DateOfBirth" />
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
                    placeholder="CIN"
                    type="text"
                    label="CIN"
                    value={values.CIN}
                    name="CIN"
                  />
                  <ErrorMessage component="p" name="CIN" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="MIF"
                    type="text"
                    label="MIF"
                    value={values.MIF}
                    name="MIF"
                  />
                  <ErrorMessage component="p" name="MIF" />
                </div>
                <div class="mif-otr row">
                  <label htmlFor="MIFstatus">MIF Status</label>
                  <div className='select-wrapper'>
                    <select
                      id="MIFstatus"
                      name="MIFstatus"
                      class="theme-input"
                      value={values.MIFstatus}
                      onChange={handleChange}
                    >
                      <option value="">MIF status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <ErrorMessage component="p" name="MIFstatus" />
                </div>


              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Input
                    handleChange={handleChange}
                    placeholder="Accounts"
                    type="text"
                    label="Accounts"
                    value={values.Accounts}
                    name="Accounts"
                  />
                  <ErrorMessage component="p" name="Accounts" />
                </div>

                <div class="enrollment-otr row">
                  <label htmlFor="Enrollmentstatus">Enrollment</label>
                  <div class="select-wrapper">
                    <select
                      id="Enrollmentstatus"
                      name="Enrollmentstatus"
                      class="theme-input"
                      value={values.Enrollmentstatus}
                      onChange={handleChange}
                    >
                      <option value="">Enrol status</option>
                      <option value="Excluded">Excluded</option>
                      <option value="Enrolled">Enrolled</option>
                      <option value="pending">pending</option>
                    </select>
                  </div>
                  <ErrorMessage component="p" name="Enrollmentstatus" />
                </div>
              </div>
              <hr/>
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