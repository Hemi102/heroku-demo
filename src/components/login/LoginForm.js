import {Formik, ErrorMessage} from 'formik';
import {validationSchema} from 'constants/login';
import Check from 'components/common/check';
import Input from 'components/common/input';

const LoginForm = ({checked, handleCheckChange, formSubmitHandler}) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    enableReinitialize={true}
    validationSchema={validationSchema}
    onSubmit={(values, {setErrors, setSubmitting}) => {
      formSubmitHandler(values, setErrors, setSubmitting);
    }}
  >
    {formik => {
      return (
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <div className="wrapper">
            <h3 className="title heading-h6">Login to Dashboard</h3>
            <p className="sub-title desc heading-sm mt-2">Please enter the details to login.</p>
          </div>
          <Input
            handleChange={formik.handleChange}
            placeholder="Enter Email"
            type="email"
            label="Email"
            value={formik.values.email}
            name="email"
            className="mb-1"
          />
          <ErrorMessage className="error-text" component="p" name="email" />
          <Input
            handleChange={formik.handleChange}
            placeholder="Enter Password"
            type="password"
            label="Password"
            value={formik.values.password}
            name="password"
            className="mb-1"
          />
          <ErrorMessage className="error-text" component="p" name="password" />
          <div className="remember-otr">
            <Check label={'Remember Me'} handleChange={handleCheckChange} value={checked} name="check" />
            <div className="Forget-text heading-xs">Forgot Password?</div>
          </div>
          <div className="action">
            <button type="submit" disabled={formik.isSubmitting} className="primary-btn w-100 mt-4">
              {formik.isSubmitting ? (
                <>
                  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                  <span className="visually-hidden">Loading...</span>
                </>
              ) : (
                <span>Login</span>
              )}
            </button>
          </div>
        </form>
      );
    }}
  </Formik>
);

export default LoginForm;
