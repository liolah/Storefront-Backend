import { Router } from 'express';
import usersRoutes from './apis/users';
import productsRoutes from './apis/products';
import ordersRoutes from './apis/orders';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/products', productsRoutes);
routes.use('/user/:userId/orders', ordersRoutes);

export default routes;
