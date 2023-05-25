import LoginForm from 'components/login/LoginForm';
import React, {useState} from 'react';
import './login.scss';

const Login = () => {
  const [checked, setCheck] = useState(false);
  const handleCheckChange = () => {
    setCheck(!checked);
  };
  return (
    <div className="Login-main">
      <div className="logo">
        <span className="heading-h6 title text-uppercase">Titanium</span>
        <span className="heading-xsb text-uppercase sub-title">Healthcare</span>
      </div>
      <div className="col-login-otr">
        <div className="col-login-inr">
          <LoginForm
            checked={checked}
            handleCheckChange={handleCheckChange}
            formSubmitHandler={() => {
              console.log('submitted');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
