import db from '../config/db';
import { Product } from '../@types/products';

async function getPopularProducts(x: string): Promise<Product[]> {
  try {
    const connection = await db.connect();
    const sql = `SELECT * FROM products 
    INNER JOIN orders_products ON products.id = orders_products.product_id
    ORDER BY quantity DESC LIMIT ${x}`;

    const results = await connection.query(sql);

    connection.release();

    return results.rows;
  } catch (err) {
    throw new Error(`An error has occurred while retrieving products. Error: ${err}`);
  }
}

async function getProductsByCategory(c: string): Promise<Product[]> {
  try {
    const connection = await db.connect();
    const sql = `SELECT * FROM products WHERE category = ${c}`;

    const results = await connection.query(sql);

    connection.release();

    return results.rows;
  } catch (err) {
    throw new Error(`An error has occurred while retrieving products. Error: ${err}`);
  }
}

export { getPopularProducts, getProductsByCategory };
export default { getPopularProducts, getProductsByCategory };
