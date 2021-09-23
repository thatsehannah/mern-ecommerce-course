import express from 'express';
import {
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  createProduct,
  deleteProductById,
  updateProduct,
  getOrders,
} from '../controllers/adminController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/users').get(protect, isAdmin, getUsers);
router
  .route('/users/:id')
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, updateUser);
router.route('/products').post(protect, isAdmin, createProduct);
router
  .route('/products/:id')
  .delete(protect, isAdmin, deleteProductById)
  .put(protect, isAdmin, updateProduct);
router.route('/orders').get(protect, isAdmin, getOrders);

export default router;
