import { Router } from 'express';
import usersRoutes from './apis/users';
import productsRoutes from './apis/products';
import ordersRoutes from './apis/orders';
import { verifyAuthToken, authorize } from '../middlewares/authToken';
import { login } from '../handlers/usersServicesHandler';

const routes = Router();

routes.use('/users', verifyAuthToken, usersRoutes);
routes.use('/products', productsRoutes);
routes.post('/login', login);
routes.use('/', verifyAuthToken,authorize, ordersRoutes);

export default routes;
