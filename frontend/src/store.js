import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productItemReducer,
  productReviewCreateReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  userRegisterReducer,
  userLoginReducer,
  userProfileReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';
import {
  adminListUsersReducer,
  adminDeleteUserReducer,
  adminUserProfileReducer,
  adminUpdateUserProfileReducer,
  adminProductDeleteReducer,
  adminProductCreateReducer,
  adminProductUpdateReducer,
  adminListOrdersReducer,
  adminOrderDeliverReducer,
} from './reducers/adminReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderpPayReducer,
  orderUserListReducer,
} from './reducers/orderReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productItem: productItemReducer,
  productReviewCreate: productReviewCreateReducer,
  adminProductDelete: adminProductDeleteReducer,
  adminProductCreate: adminProductCreateReducer,
  adminProductUpdate: adminProductUpdateReducer,
  cart: cartReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderpPayReducer,
  orderUserList: orderUserListReducer,
  adminListOrders: adminListOrdersReducer,
  adminOrderDeliver: adminOrderDeliverReducer,
  adminListUsers: adminListUsersReducer,
  adminDeleteUser: adminDeleteUserReducer,
  adminUpdateUserProfile: adminUpdateUserProfileReducer,
  adminUserProfile: adminUserProfileReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
