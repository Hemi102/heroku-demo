import {LOADING, LOGIN_USER} from '../action-types/login';

const login = (state = {}, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case LOADING:
      return {...state, loading: payload};

    case LOGIN_USER:
      return {...state, loginData: payload};

    default:
      return {...state};
  }
};

export default login;
