import express from 'express';
import { UserController } from './user.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post('/create-user', UserController.userRegistration);
router.get('/me', auth('user', 'admin'), UserController.getMe);
router.get(
  '/update-profile',
  auth('user', 'admin'),
  UserController.updateProfile,
);

export const UserRoutes = router;
