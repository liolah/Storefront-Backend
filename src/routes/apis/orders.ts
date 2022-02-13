import { Router } from 'express';
import { userOrders, completedOrders } from '../../handlers/orderServicesHandler';

const routes = Router();

routes.get('/', userOrders);
routes.get('/completed', completedOrders);

export default routes;
