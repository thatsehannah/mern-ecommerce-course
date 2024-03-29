import * as user from '../constants/userConstants';

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case user.USER_REGISTER_REQUEST:
      return { loading: true };
    case user.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case user.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case user.USER_LOGIN_REQUEST:
      return { loading: true };
    case user.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case user.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case user.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case user.USER_PROFILE_REQUEST:
      return { ...state, loading: true };
    case user.USER_PROFILE_SUCCESS:
      return { loading: false, user: action.payload };
    case user.USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case user.USER_PROFILE_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case user.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case user.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case user.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
