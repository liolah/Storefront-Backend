import db from '../config/db';

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export class ProductModel {
  async index(): Promise<Product[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * FROM products';

      const results = await connection.query(sql);

      connection.release();

      return results.rows;
    } catch (err) {
      throw new Error(`An error has occurred while retrieving products. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql = `SELECT * FROM Products WHERE id =${id}`;

      const results = await connection.query(sql);

      connection.release();

      return results.rows[0];
    } catch (err) {
      throw new Error(`An error has occurred while retrieving product ${id}. Error: ${err}`);
    }
  }

  async create(p: Product): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql = `INSERT INTO Products (name, price, category) VALUES (${p.name}, ${p.price}, ${p.category})`;

      const results = await connection.query(sql);

      connection.release();

      return results.rows[0];
    } catch (err) {
      throw new Error(`An error has occurred while creating a new product. Error: ${err}`);
    }
  }

  async destroy(id: string): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM products WHERE id = ${id}`;

      const deletedProduct = await connection.query(sql);

      connection.release();

      return deletedProduct.rows[0];
    } catch (err) {
      throw new Error(`An error has occurred while deleting product ${id}. Error: ${err}`);
    }
  }
}
