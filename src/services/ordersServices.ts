import db from '../config/db';
import { OrderModel } from '../models/order';
import { DetailedOrder } from '../@types/orders';

const order = new OrderModel();

async function getOrderByUserId(userId: string): Promise<DetailedOrder[]> {
  try {
    const connection = await db.connect();
    const abstractOrderSql = `SELECT * FROM orders WHERE user_id = ${userId}`;
    const abstractOrder = await connection.query(abstractOrderSql);

    const detailedOrders = abstractOrder.rows.map(async (order) => {
      const sql = `SELECT product_id, quantity FROM orders_products WHERE order_id = ${order.order_id}`;
      const productsInfo = await connection.query(sql);
      return {
        id: order.id,
        userId: order.user_id,
        products: productsInfo.rows,
        status: order.status,
      } as DetailedOrder;
    });

    connection.release();

    return Promise.all(detailedOrders);
  } catch (err) {
    throw new Error(`An error has occurred while retrieving orders. Error: ${err}`);
  }
}

async function completedOrders(id: string): Promise<DetailedOrder[]> {
  try {
    const connection = await db.connect();
    const abstractOrderSql = `SELECT * FROM orders WHERE status = 'complete' AND user_id = ${id}`;
    const abstractOrder = await connection.query(abstractOrderSql);

    const detailedOrders = abstractOrder.rows.map(async (order) => {
      const sql = `SELECT product_id, quantity FROM orders_products WHERE order_id = ${order.order_id}`;
      const productsInfo = await connection.query(sql);
      return {
        id: order.id,
        userId: order.user_id,
        products: productsInfo.rows,
        status: order.status,
      } as DetailedOrder;
    });

    connection.release();

    return Promise.all(detailedOrders);
  } catch (err) {
    throw new Error(`An error has occurred while retrieving completed orders. Error: ${err}`);
  }
}

export { getOrderByUserId, completedOrders};
export default { getOrderByUserId, completedOrders};