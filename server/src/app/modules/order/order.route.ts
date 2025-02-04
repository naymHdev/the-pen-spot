import express from 'express';
import { OrderController } from './order.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.get('/verify', auth('user', 'admin'), OrderController.verifyPayment);
router.post('/create-order', auth('user'), OrderController.createOrder);
router.get('/', auth('admin', 'user'), OrderController.getAllOrder);

export const OrderRoutes = router;
