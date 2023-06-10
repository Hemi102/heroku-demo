import {CLIENT_ID, CLIENT_SECRET, GRANT_TYPE} from 'constants/common';
import {AUTH_ENDPOINT, FORGOT_PASSWORD_ENDPOINT} from 'constants/endpoints';
import {post, put} from 'services/network';

export const getAuthToken = ({email, password}) => {
  const data = {
    grant_type: GRANT_TYPE,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    email,
    password,
  };

  return post(AUTH_ENDPOINT, data);
};

export const forgetUserPassword = async (values, setErrors) => {
  try {
    const response = await post(FORGOT_PASSWORD_ENDPOINT, {user: values}, true);
    console.log('forgot password');
    return response;
  } catch (error) {
    if (error?.response?.data) {
      setErrors(error?.response?.data.errors);
    }
    console.log(error);
    console.error(error);
  }
};

export const resetUserPassword = async (values, setErrors) => {
  try {
    const response = await put(FORGOT_PASSWORD_ENDPOINT, {user: values}, true);
    console.log('Password has been reset successfully');
    return response;
  } catch (error) {
    if (error?.response?.data) {
      setErrors(error?.response?.data.errors);
    }
    console.log(error);
    console.error(error);
  }
};
