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
        const sql = `SELECT * FROM products 
    INNER JOIN orders_products ON products.id = orders_products.product_id
    ORDER BY quantity DESC LIMIT ${x}`;
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
        const sql = `SELECT * FROM products WHERE category = ${c}`;
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
