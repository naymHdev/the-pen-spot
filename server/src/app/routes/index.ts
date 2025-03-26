import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.routes';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ProductRoutes } from '../modules/products/product.routes';
import { OrderRoutes } from '../modules/order/order.route';
import { AdminRoutes } from '../modules/admin/amin.route';
import { BlogRoutes } from '../modules/blog/blog.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
