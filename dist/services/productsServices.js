"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = exports.getPopularProducts = void 0;
const db_1 = __importDefault(require("../config/db"));
async function getPopularProducts(x) {
    try {
        const connection = await db_1.default.connect();
        const sql = ` SELECT
                    products.id,
                    products.name,
                    products.price,
                    products.category,
                    COUNT(DISTINCT users.id) AS no_of_distinct_buyers
                  FROM
                    users
                    LEFT JOIN orders on users.id = orders.user_id
                    LEFT JOIN orders_products on orders.id = orders_products.order_id
                    LEFT JOIN products on orders_products.product_id = products.id
                  GROUP BY
                    products.id
                  ORDER BY
                    no_of_distinct_buyers DESC
                  LIMIT
                    ${x}`;
        const results = await connection.query(sql);
        connection.release();
        return results.rows;
    }
    catch (err) {
        throw new Error(`An error has occurred while retrieving products. Error: ${err}`);
    }
}
exports.getPopularProducts = getPopularProducts;
async function getProductsByCategory(c) {
    try {
        const connection = await db_1.default.connect();
        const category = c.charAt(0).toUpperCase() + c.slice(1); // To make sure the first litter is always capitalized (important for the query)
        const sql = `SELECT * FROM products WHERE category = '${category}'`;
        const results = await connection.query(sql);
        connection.release();
        return results.rows;
    }
    catch (err) {
        throw new Error(`An error has occurred while retrieving products. Error: ${err}`);
    }
}
exports.getProductsByCategory = getProductsByCategory;
exports.default = { getPopularProducts, getProductsByCategory };
