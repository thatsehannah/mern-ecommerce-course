import * as product from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case product.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case product.PRODUCT_LIST_FETCHED:
      return { loading: false, products: action.payload };
    case product.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productItemReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case product.PRODUCT_ITEM_REQUEST:
      return { loading: true, ...state };
    case product.PRODUCT_ITEM_FETCHED:
      return { loading: false, product: action.payload };
    case product.PRODUCT_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = { }, action) => {
  switch (action.type) {
    case product.PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case product.PRODUCT_CREATE_REVIEW_FETCHED:
      return { loading: false, success: true };
    case product.PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case product.PRODUCT_CREATE_REVIEW_RESET:
      return {}
    default:
      return state;
  }
};


