"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const db_1 = __importDefault(require("../config/db"));
class OrderModel {
    async index() {
        try {
            const connection = await db_1.default.connect();
            const sql = 'SELECT * FROM orders';
            const results = await connection.query(sql);
            connection.release();
            return results.rows;
        }
        catch (err) {
            throw new Error(`An error has occurred while retrieving orders. Error: ${err}`);
        }
    }
    async show(id) {
        try {
            const connection = await db_1.default.connect();
            const sql = `SELECT * FROM orders WHERE id =${id}`;
            const results = await connection.query(sql);
            connection.release();
            return results.rows[0];
        }
        catch (err) {
            throw new Error(`An error has occurred while retrieving order ${id}. Error: ${err}`);
        }
    }
    async delete(id) {
        try {
            const connection = await db_1.default.connect();
            const sql = `DELETE FROM orders WHERE id = ${id} RETURNING *`;
            const deletedOrder = await connection.query(sql);
            connection.release();
            return deletedOrder.rows[0];
        }
        catch (err) {
            throw new Error(`An error has occurred while deleting order ${id}. Error: ${err}`);
        }
    }
}
exports.OrderModel = OrderModel;
