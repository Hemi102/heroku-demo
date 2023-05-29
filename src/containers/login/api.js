import {AUTH_ENDPOINT} from 'constants/endpoints';
import {post} from 'services/network';

export const getAuthToken = ({email, password}) => {
  const data = {
    email,
    password,
  };
  return post(AUTH_ENDPOINT, data);
};
