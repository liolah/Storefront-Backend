import db from '../config/db';
import { Order, DetailedOrder } from '../@types/orders';

async function getOrderByUserId(userId: string): Promise<DetailedOrder[]> {
  try {
    const connection = await db.connect();
    const orderSql = `SELECT
                        orders.id AS "id",
                        users.id AS "userId",
                        status AS "status"
                      FROM
                        users
                        LEFT JOIN orders on users.id = orders.user_id
                      WHERE
                        status = 'Active' AND user_id = ${userId}`;

    const order = await connection.query(orderSql);

    const detailedOrders = order.rows.map(async (order): Promise<DetailedOrder> => {
      const sql = ` SELECT
                      orders_products.product_id AS "id",
                      quantity
                    FROM
                      orders_products
                    WHERE
                      order_id = ${order.id}`;

      const products = await connection.query(sql);
      order.products = products.rows;
      return order;
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
    const orderSql = `SELECT
                        orders.id AS "id",
                        users.id AS "userId",
                        status AS "status"
                      FROM
                        users
                        LEFT JOIN orders on users.id = orders.user_id
                      WHERE
                        status = 'Complete' AND user_id = ${id}`;

    const order = await connection.query(orderSql);

    const detailedOrders = order.rows.map(async (order): Promise<DetailedOrder> => {
      const sql = ` SELECT
                      orders_products.product_id AS "id",
                      quantity
                    FROM
                      orders_products
                    WHERE
                      order_id = ${order.id}`;

      const products = await connection.query(sql);
      order.products = products.rows;
      return order;
    });

    connection.release();

    return Promise.all(detailedOrders);
  } catch (err) {
    throw new Error(`An error has occurred while retrieving completed orders. Error: ${err}`);
  }
}

export { getOrderByUserId, completedOrders };
export default { getOrderByUserId, completedOrders };
