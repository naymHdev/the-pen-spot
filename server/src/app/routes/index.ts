import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.routes';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ProductRoutes } from '../modules/products/product.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
