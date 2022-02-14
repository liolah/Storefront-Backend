import db from '../config/db';
import { Order } from '../@types/orders';

export class OrderModel {
  async index(): Promise<Order[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * FROM orders';

      const results = await connection.query(sql);

      connection.release();

      return results.rows;
    } catch (err) {
      throw new Error(`An error has occurred while retrieving orders. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Order> {
    try {
      const connection = await db.connect();
      const sql = `SELECT * FROM orders WHERE id =${id}`;

      const results = await connection.query(sql);

      connection.release();

      return results.rows[0];
    } catch (err) {
      throw new Error(`An error has occurred while retrieving order ${id}. Error: ${err}`);
    }
  }

  async delete(id: string): Promise<Order> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM orders WHERE id = ${id} RETURNING *`;

      const deletedOrder = await connection.query(sql);

      connection.release();

      return deletedOrder.rows[0];
    } catch (err) {
      throw new Error(`An error has occurred while deleting order ${id}. Error: ${err}`);
    }
  }
}
