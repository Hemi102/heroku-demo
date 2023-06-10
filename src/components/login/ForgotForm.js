import {Formik, ErrorMessage} from 'formik';
import {forgotPasswordSchema} from 'constants/login';
import Input from 'components/common/input';
import {forgetUserPassword} from 'containers/login/api';

const ForgotForm = ({formSubmitHandler}) => {
  console.log('fazal');

  const submitHandler = async (values, setErrors, setSubmitting) => {
    setSubmitting(true);
    try {
      const result = await forgetUserPassword(values, setErrors);
      if (result?.meta?.status === 200) {
        setSubmitting(false);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      enableReinitialize={true}
      validationSchema={forgotPasswordSchema}
      onSubmit={(values, {setErrors, setSubmitting}) => {
        submitHandler(values, setErrors, setSubmitting);
      }}
    >
      {formik => {
        return (
          <form className="login-form" onSubmit={formik.handleSubmit}>
            <div className="wrapper">
              <h3 className="title heading-h6">Forgot Password?</h3>
              <p className="sub-title desc heading-sm mt-2">Enter your email below to reset your password.</p>
            </div>
            <Input
              handleChange={formik.handleChange}
              placeholder="Enter email for password reset"
              type="email"
              label="Email"
              value={formik.values.email}
              name="email"
              className="mb-1"
            />
            <ErrorMessage className="error-text" component="p" name="email" />

            <div className="action">
              <button type="submit" disabled={formik.isSubmitting} className="primary-btn w-100 mt-4">
                {formik.isSubmitting ? (
                  <>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                  </>
                ) : (
                  <span>Reset Password</span>
                )}
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default ForgotForm;
