import * as admin from '../constants/adminConstants';

export const adminListUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case admin.ADMIN_USER_LIST_REQUEST:
      return { loading: true };
    case admin.ADMIN_USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case admin.ADMIN_USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case admin.ADMIN_USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const adminUserProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case admin.ADMIN_USER_PROFILE_REQUEST:
      return { ...state, loading: true };
    case admin.ADMIN_USER_PROFILE_SUCCESS:
      return { loading: false, user: action.payload };
    case admin.ADMIN_USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case admin.ADMIN_USER_PROFILE_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const adminDeleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case admin.ADMIN_DELETE_USER_REQUEST:
      return { loading: true };
    case admin.ADMIN_DELETE_USER_SUCCESS:
      return { loading: false, success: true };
    case admin.ADMIN_DELETE_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminUpdateUserProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case admin.ADMIN_UPDATE_USER_PROFILE_REQUEST:
      return { loading: true };
    case admin.ADMIN_UPDATE_USER_PROFILE_SUCCESS:
      return { loading: false, success: true };
    case admin.ADMIN_UPDATE_USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case admin.ADMIN_UPDATE_USER_PROFILE_RESET:
      return { user: {} };
    default:
      return state;
  }
};
