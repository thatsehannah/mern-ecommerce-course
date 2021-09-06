import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc      Create new order
// @route     POST /api/orders
// @access    Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const createdOrder = await Order.create({
      orderItems: orderItems,
      user: req.user._id,
      shippingAddress: shippingAddress,
      paymentMethod: paymentMethod,
      itemsPrice: itemsPrice,
      taxPrice: taxPrice,
      shippingPrice: shippingPrice,
      totalPrice: totalPrice,
    });

    res.status(201).json(createdOrder)
  }
});

export {addOrderItems}
