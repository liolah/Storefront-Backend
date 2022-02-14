import db from '../config/db';
import { Product } from '../@types/products';

async function getPopularProducts(x: string): Promise<Product[]> {
  try {
    const connection = await db.connect();
    const sql = ` SELECT
                    products.id,
                    products.name,
                    COUNT(DISTINCT users.id) AS no_of_distinct_users
                  FROM
                    users
                    LEFT JOIN orders on users.id = orders.user_id
                    LEFT JOIN orders_products on orders.id = orders_products.order_id
                    LEFT JOIN products on orders_products.product_id = products.id
                  GROUP BY
                    products.id
                  ORDER BY
                    no_of_distinct_users DESC
                  LIMIT
                    ${x}`;

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
