import React, {useEffect} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';

import ResetPassword from 'components/login/ResetPassword';

import {getAccessToken} from 'utils/common';
import {resetUserPassword} from 'containers/login/api';

import '../login/login.scss';

function Reset() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const confirmation_token = searchParams.get('confirmation_token');
  const reset_password_token = searchParams.get('reset_password_token');

  useEffect(() => {
    if (getAccessToken()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const passwordResetFormHandler = async (values, setErrors, setSubmitting) => {
    setSubmitting(true);
    if (reset_password_token) {
      values.reset_password_token = reset_password_token;
    }
    if (confirmation_token) {
      values.confirmation_token = confirmation_token;
    }

    try {
      const result = await resetUserPassword(values, setErrors);

      setSubmitting(false);
      if (result) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="Login-main">
      <div className="logo">
        <span className="heading-h6 title text-uppercase">Titanium</span>
        <span className="heading-xsb text-uppercase sub-title">Healthcare</span>
      </div>
      <div className="col-login-otr">
        <div className="col-login-inr">
          <ResetPassword formSubmitHandler={passwordResetFormHandler} />
        </div>
      </div>
    </div>
  );
}

export default Reset;
