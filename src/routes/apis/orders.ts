import { Router } from 'express';
import { userOrders, completedOrders } from '../../handlers/ordersServicesHandler';
import { authorize } from '../../middlewares/authToken';

const routes = Router();

routes.get('/user/:userId/orders', authorize, userOrders);
routes.get('/user/:userId/orders/completed', authorize, completedOrders);

export default routes;
