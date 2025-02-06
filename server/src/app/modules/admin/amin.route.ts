import express from 'express';
import { AdminControllers } from './admin.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.patch('/user/:userId/block', auth('admin'), AdminControllers.blockUser);

export const AdminRoutes = router;
