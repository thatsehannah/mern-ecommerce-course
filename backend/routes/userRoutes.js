import express from 'express';
import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
} from '../controllers/userController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, isAdmin, getUsers);
router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
