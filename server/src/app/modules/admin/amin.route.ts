import express from 'express';
import { AdminControllers } from './admin.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.patch('/user/:userId/block', auth('admin'), AdminControllers.blockUser);
router.patch('/:orderId/status', auth('admin'), AdminControllers.updateOrder);

export const AdminRoutes = router;
