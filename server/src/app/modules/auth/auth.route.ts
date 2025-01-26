import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { AuthValidations } from './auth.validation';
import { AuthControllers } from './auth.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidations.loginValidationSchema),
  AuthControllers.loginUser,
);

router.get('/all-users', auth('user', 'admin'), AuthControllers.findAllUser);

export const AuthRoutes = router;
