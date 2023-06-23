import Input from 'components/common/input';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  defaultLocation: yup.string().required(),
  outreachleader: yup.string().required()
});



const AddQuestionForm = ({ handleQuestionSubmittion, handleClose }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        username: '',
        password: '',
        defaultLocation: '',
        outreachleader:''
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
              <div className='d-flex justify-content-between'>
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
              <div className='d-flex justify-content-between'>
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
                placeholder="select outreach leader"
                type="text"
                label="Outreach leader"
                value={values.outreachleader}
                name="outreachleader"
              />
              <ErrorMessage component="p" name="outreachleader" />
              <Input
                handleChange={handleChange}
                placeholder="Default Location"
                type="text"
                label="Default Location"
                value={values.defaultLocation}
                name="defaultLocation"
              />
              <ErrorMessage component="p" name="defaultLocation" />

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