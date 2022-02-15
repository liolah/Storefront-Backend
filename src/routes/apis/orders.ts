import { Router } from 'express';
import { userOrders, completedOrders } from '../../handlers/ordersServicesHandler';

const routes = Router();

routes.get('/user/:userId/orders', userOrders);
routes.get('/user/:userId/orders/completed', completedOrders);

export default routes;
