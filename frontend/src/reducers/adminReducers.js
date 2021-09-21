import * as admin from '../constants/adminConstants';

export const adminListUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case admin.USER_LIST_REQUEST:
      return { loading: true };
    case admin.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case admin.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case admin.USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const userProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case admin.USER_PROFILE_REQUEST:
      return { ...state, loading: true };
    case admin.USER_PROFILE_SUCCESS:
      return { loading: false, user: action.payload };
    case admin.USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case admin.USER_PROFILE_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const adminDeleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case admin.DELETE_USER_REQUEST:
      return { loading: true };
    case admin.DELETE_USER_SUCCESS:
      return { loading: false, success: true };
    case admin.DELETE_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminUpdateUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case admin.UPDATE_USER_REQUEST:
      return { loading: true };
    case admin.UPDATE_USER_SUCCESS:
      return { loading: false, success: true };
    case admin.UPDATE_USER_FAIL:
      return { loading: false, error: action.payload };
    case admin.UPDATE_USER_RESET:
      return { user: {} };
    default:
      return state;
  }
};
