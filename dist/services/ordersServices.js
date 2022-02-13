"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completedOrders = exports.getOrderByUserId = void 0;
const db_1 = __importDefault(require("../config/db"));
const order_1 = require("../models/order");
const order = new order_1.OrderModel();
async function getOrderByUserId(userId) {
    try {
        const connection = await db_1.default.connect();
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
            };
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
            };
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
