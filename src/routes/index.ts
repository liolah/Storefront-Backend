import { Router } from 'express';
import usersRoutes from './apis/users';
import productsRoutes from './apis/products';
import ordersRoutes from './apis/orders';
import { verifyAuthToken } from '../middlewares/authToken';
import { login } from '../handlers/usersServicesHandler';

const routes = Router();

routes.use('/users', verifyAuthToken, usersRoutes);
routes.post('/login', login);
routes.use('/products', productsRoutes);
routes.use('/', ordersRoutes);

export default routes;
