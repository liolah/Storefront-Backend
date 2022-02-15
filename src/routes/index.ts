import { Router } from 'express';
import usersRoutes from './apis/users';
import productsRoutes from './apis/products';
import ordersRoutes from './apis/orders';
import { verifyAuthToken } from '../middlewares/authTokenVerification';
import { login } from '../handlers/usersServicesHandler';

const routes = Router();

routes.use('/users', verifyAuthToken, usersRoutes);
routes.use('/products', productsRoutes);
routes.post('/login', login);
routes.use('/', verifyAuthToken, ordersRoutes);

export default routes;
