import ForgotForm from 'components/login/ForgotForm';
import LoginForm from 'components/login/LoginForm';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import {loginAction} from 'store/action-creators/login';
import {getAccessToken, setAccessToken, setUserInfoInStorage, useQuery} from 'utils/common';
import './login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const shouldResetPassword = query.get('reset');
  const [checked, setCheck] = useState(false);

  useEffect(() => {
    if (getAccessToken()) {
      navigate('/dashboard');
    }
  }, [navigate]);
  const handleCheckChange = () => {
    setCheck(!checked);
  };
  const loginFormSubmitHandler = async (values, setErrors, setSubmitting) => {
    const response = await dispatch(loginAction(values, setSubmitting));
    if (response?.status_code === 200) {
      setAccessToken(response.access_token);
      setUserInfoInStorage(response.result);
      navigate('/dashboard');
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
          {shouldResetPassword ? (
            <ForgotForm />
          ) : (
            <LoginForm
              checked={checked}
              handleCheckChange={handleCheckChange}
              formSubmitHandler={loginFormSubmitHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
