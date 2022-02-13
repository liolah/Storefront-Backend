"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const db_1 = __importDefault(require("../config/db"));
class ProductModel {
    async index() {
        try {
            const connection = await db_1.default.connect();
            const sql = 'SELECT * FROM products';
            const results = await connection.query(sql);
            connection.release();
            return results.rows;
        }
        catch (err) {
            throw new Error(`An error has occurred while retrieving products. Error: ${err}`);
        }
    }
    async show(id) {
        try {
            const connection = await db_1.default.connect();
            const sql = `SELECT * FROM Products WHERE id =${id}`;
            const results = await connection.query(sql);
            connection.release();
            return results.rows[0];
        }
        catch (err) {
            throw new Error(`An error has occurred while retrieving product ${id}. Error: ${err}`);
        }
    }
    async create(p) {
        try {
            const connection = await db_1.default.connect();
            const sql = `INSERT INTO Products (name, price, category) VALUES (${p.name}, ${p.price}, ${p.category})`;
            const results = await connection.query(sql);
            connection.release();
            return results.rows[0];
        }
        catch (err) {
            throw new Error(`An error has occurred while creating a new product. Error: ${err}`);
        }
    }
    async destroy(id) {
        try {
            const connection = await db_1.default.connect();
            const sql = `DELETE FROM products WHERE id = ${id}`;
            const deletedProduct = await connection.query(sql);
            connection.release();
            return deletedProduct.rows[0];
        }
        catch (err) {
            throw new Error(`An error has occurred while deleting product ${id}. Error: ${err}`);
        }
    }
}
exports.ProductModel = ProductModel;
