"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completedOrders = exports.getOrderByUserId = void 0;
const db_1 = __importDefault(require("../config/db"));
async function getOrderByUserId(userId) {
    try {
        const connection = await db_1.default.connect();
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
        const detailedOrders = order.rows.map(async (order) => {
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
    }
    catch (err) {
        throw new Error(`An error has occurred while retrieving orders. Error: ${err}`);
    }
}
exports.getOrderByUserId = getOrderByUserId;
async function completedOrders(id) {
    try {
        const connection = await db_1.default.connect();
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
        const detailedOrders = order.rows.map(async (order) => {
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
    }
    catch (err) {
        throw new Error(`An error has occurred while retrieving completed orders. Error: ${err}`);
    }
}
exports.completedOrders = completedOrders;
exports.default = { getOrderByUserId, completedOrders };
