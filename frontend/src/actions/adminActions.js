import axios from 'axios';
import * as admin from '../constants/adminConstants';
import { USER_UPDATE_PROFILE_SUCCESS } from '../constants/userConstants';

//------------ADMIN USERS ACTIONS------------\\

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: admin.ADMIN_USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/admin/users`, config);

    dispatch({
      type: admin.ADMIN_USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: admin.ADMIN_USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: admin.ADMIN_DELETE_USER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/admin/users/${id}`, config);

    dispatch({
      type: admin.ADMIN_DELETE_USER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: admin.ADMIN_DELETE_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfileAsAdmin =
  (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: admin.ADMIN_UPDATE_USER_PROFILE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/admin/users/${user._id}`,
        user,
        config
      );

      dispatch({ type: admin.ADMIN_UPDATE_USER_PROFILE_SUCCESS });

      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: admin.ADMIN_UPDATE_USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUserProfileAsAdmin = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: admin.ADMIN_USER_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/admin/users/${id}`, config);

    dispatch({
      type: admin.ADMIN_USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: admin.ADMIN_USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//------------ADMIN PRODUCT ACTIONS------------\\

export const listProducts =
  (keyword = '', pageNumber = '') =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: admin.ADMIN_PRODUCT_LIST_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(
        `/api/admin/products?keyword=${keyword}&pageNumber=${pageNumber}`,
        config
      );

      dispatch({
        type: admin.ADMIN_PRODUCT_LIST_FETCHED,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: admin.ADMIN_PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: admin.ADMIN_PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/admin/products/${id}`, config);

    dispatch({
      type: admin.ADMIN_PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: admin.ADMIN_PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: admin.ADMIN_PRODUCT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/admin/products`, {}, config);

    dispatch({
      type: admin.ADMIN_PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: admin.ADMIN_PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (updatedProduct) => async (dispatch, getState) => {
  try {
    dispatch({
      type: admin.ADMIN_PRODUCT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/admin/products/${updatedProduct._id}`,
      updatedProduct,
      config
    );

    dispatch({
      type: admin.ADMIN_PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: admin.ADMIN_PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//------------ADMIN ORDER ACTIONS------------\\

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: admin.ADMIN_ORDER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/admin/orders`, config);

    dispatch({
      type: admin.ADMIN_ORDER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: admin.ADMIN_ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: admin.ADMIN_ORDER_DELIVER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/admin/orders/${order._id}/deliver`,
      {},
      config
    );

    dispatch({
      type: admin.ADMIN_ORDER_DELIVER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: admin.ADMIN_ORDER_DELIVER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
