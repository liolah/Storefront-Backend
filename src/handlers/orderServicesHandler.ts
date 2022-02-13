import { Request, Response } from 'express';
import ordersServices from '../services/ordersServices';

const userOrders = async (req: Request, res: Response) => {
  const orders = await ordersServices.getOrderByUserId(req.body.userId);
  res.json(orders);
};

const completedOrders = async (req: Request, res: Response) => {
  const orders = await ordersServices.completedOrders(req.body.userId);
  res.json(orders);
};

export { userOrders, completedOrders };
export default { userOrders, completedOrders };
