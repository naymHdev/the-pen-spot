import express from 'express';
import { OrderController } from './order.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post('/create-order', auth('user'), OrderController.createOrder);
router.get('/', auth('admin', 'user'), OrderController.getAllOrder);

export const OrderRoutes = router;
