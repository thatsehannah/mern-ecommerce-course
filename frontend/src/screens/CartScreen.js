import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { addToCart } from '../actions/cartActions';

const CartScreen = ({match, location, history}) => {
  const productId = match.params.id

  //getting the qty from the query string (?qty=10)
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty, match])

  const { cartItems } = useSelector(state => state.cart)
  console.log(cartItems)

  return <div>Cart</div>;
};

export default CartScreen;
