import { Request, Response } from 'express';
import ordersServices from '../services/ordersServices';

const userOrders = async (req: Request, res: Response) => {
  try {
    const orders = await ordersServices.getOrderByUserId(req.params.userId);
    res.json(orders);
  } catch (err) {
    res.status(400).json(err);
  }
};

const completedOrders = async (req: Request, res: Response) => {
  try {
    const orders = await ordersServices.completedOrders(req.params.userId);
    res.json(orders);
  } catch (err) {
    res.status(400).json(err);
  }
};

export { userOrders, completedOrders };
export default { userOrders, completedOrders };
