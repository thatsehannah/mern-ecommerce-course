import express from 'express';
import {
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/adminController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/users').get(protect, isAdmin, getUsers);
router
  .route('/users/:id')
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, updateUser);

export default router
