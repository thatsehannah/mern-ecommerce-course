import axios from 'axios';
import * as product from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: product.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({
      type: product.PRODUCT_LIST_FETCHED,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: product.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: product.PRODUCT_ITEM_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: product.PRODUCT_ITEM_FETCHED,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: product.PRODUCT_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

