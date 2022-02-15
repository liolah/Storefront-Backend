import { Router } from 'express';
import { userOrders, completedOrders } from '../../handlers/ordersServicesHandler';
import { verifyAuthToken, authorize } from '../../middlewares/authToken';

const routes = Router();

routes.get('/user/:userId/orders', verifyAuthToken, authorize, userOrders);
routes.get('/user/:userId/orders/completed', verifyAuthToken, authorize, completedOrders);

export default routes;
