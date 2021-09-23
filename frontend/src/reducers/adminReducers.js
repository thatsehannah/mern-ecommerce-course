import * as admin from '../constants/adminConstants';

//------------ADMIN USER REDUCERS------------\\

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

//------------ADMIN PRODUCT REDUCERS------------\\

export const adminProductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case admin.ADMIN_PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case admin.ADMIN_PRODUCT_LIST_FETCHED:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case admin.ADMIN_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminProductDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case admin.ADMIN_PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case admin.ADMIN_PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case admin.ADMIN_PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminProductCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case admin.ADMIN_PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case admin.ADMIN_PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, createdProduct: action.payload };
    case admin.ADMIN_PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case admin.ADMIN_PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const adminProductUpdateReducer = (state = { updatedProduct: {}}, action) => {
  switch (action.type) {
    case admin.ADMIN_PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case admin.ADMIN_PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, updatedProduct: action.payload };
    case admin.ADMIN_PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case admin.ADMIN_PRODUCT_UPDATE_RESET:
      return { updatedProduct: {}};
    default:
      return state;
  }
};

//------------ADMIN ORDERS REDUCERS------------\\

export const adminListOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case admin.ADMIN_ORDER_LIST_REQUEST:
      return { loading: true };
    case admin.ADMIN_ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case admin.ADMIN_ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminOrderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case admin.ADMIN_ORDER_DELIVER_REQUEST:
      return {
        loading: true,
      };
    case admin.ADMIN_ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case admin.ADMIN_ORDER_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case admin.ADMIN_ORDER_DELIVER_RESET:
      return {};
    default:
      return state;
  }
};
