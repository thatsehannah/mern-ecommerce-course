import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productItemReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  userRegisterReducer,
  userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';
import {
  adminListUsersReducer,
  adminDeleteUserReducer,
  adminUpdateUserReducer,
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
  cart: cartReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderpPayReducer,
  orderUserList: orderUserListReducer,
  adminListUsers: adminListUsersReducer,
  adminDeleteUser: adminDeleteUserReducer,
  adminUpdateUser: adminUpdateUserReducer,
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
