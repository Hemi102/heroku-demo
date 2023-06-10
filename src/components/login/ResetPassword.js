import {Formik, ErrorMessage} from 'formik';
import {resetPasswordSchema} from 'constants/login';
import Check from 'components/common/check';
import Input from 'components/common/input';

const ResetPassword = ({checked, handleCheckChange, formSubmitHandler}) => (
  <Formik
    initialValues={{
      password: '',
      password_confirmation: '',
    }}
    enableReinitialize={true}
    validationSchema={resetPasswordSchema}
    onSubmit={(values, {setErrors, setSubmitting}) => {
      formSubmitHandler(values, setErrors, setSubmitting);
    }}
  >
    {formik => {
      return (
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <div className="wrapper">
            <h3 className="title heading-h6">Reset your password</h3>
            <p className="sub-title desc heading-sm mt-2">Enter your details below for setting a new password.</p>
          </div>
          <Input
            handleChange={formik.handleChange}
            placeholder="Enter New Password"
            type="password"
            label="New Password"
            value={formik.values.password}
            name="password"
            className="mb-1"
          />
          <ErrorMessage className="error-text" component="p" name="password" />
          <Input
            handleChange={formik.handleChange}
            placeholder="Confirm Password"
            type="password"
            label="Confirm Password"
            value={formik.values.password_confirmation}
            name="password_confirmation"
            className="mb-1"
          />
          <ErrorMessage className="error-text" component="p" name="password_confirmation" />

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
                <span>Update Password</span>
              )}
            </button>
          </div>
        </form>
      );
    }}
  </Formik>
);

export default ResetPassword;
