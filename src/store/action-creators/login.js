import {getAuthToken} from 'containers/login/api';
import {LOADING, LOGIN_USER} from 'store/action-types/login';

export const loginAction = (data, setSubmitting) => async dispatch => {
  setSubmitting(true);
  dispatch({type: LOADING, payload: true});
  try {
    const response = await getAuthToken(data);
    if (response?.status_code === 200) {
      console.log('logged in');
    } else {
      console.log('fail to login');
    }
    dispatch({type: LOGIN_USER, payload: response});
    return response;
  } catch (error) {
    console.log(error);
    dispatch({type: LOGIN_USER, payload: {}});
  } finally {
    dispatch({type: LOADING, payload: false});
    setSubmitting(false);
  }
};
