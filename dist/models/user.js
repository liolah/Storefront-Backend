"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const db_1 = __importDefault(require("../config/db"));
const usersServices_1 = require("../services/usersServices");
class UserModel {
    async index() {
        try {
            const connection = await db_1.default.connect();
            const sql = ` SELECT
                      id,
                      first_name AS firstName,
                      last_name AS lastName,
                      password_digest AS passwordDigest 
                    FROM
                      users`;
            const results = await connection.query(sql);
            connection.release();
            return results.rows;
        }
        catch (err) {
            throw new Error(`An error has occurred while retrieving users. Error: ${err}`);
        }
    }
    async show(id) {
        try {
            const connection = await db_1.default.connect();
            const sql = ` SELECT 
                      id,
                      first_name AS firstName,
                      last_name AS lastName,
                      password_digest AS passwordDigest
                    FROM
                      users WHERE id =${id}`;
            const results = await connection.query(sql);
            connection.release();
            return results.rows[0];
        }
        catch (err) {
            throw new Error(`An error has occurred while retrieving user with user_id of: ${id}. Error: ${err}`);
        }
    }
    async create(u) {
        try {
            const connection = await db_1.default.connect();
            const sql = ` INSERT INTO
                      users (first_name, last_name, password_digest)
                    VALUES
                      (
                        '${u.firstName}',
                        '${u.lastName}',
                        '${(0, usersServices_1.encryptPassword)(u.password)}'
                      ) RETURNING id,
                      first_name AS firstName,
                      last_name AS lastName,
                      password_digest AS passwordDigest`;
            const results = await connection.query(sql);
            connection.release();
            return results.rows[0];
        }
        catch (err) {
            throw new Error(`An error has occurred while creating a new user. Error: ${err}`);
        }
    }
    async destroy(id) {
        try {
            const connection = await db_1.default.connect();
            const sql = ` DELETE FROM users WHERE id = ${id}
                    RETURNING id,
                    first_name AS firstName,
                    last_name AS lastName,
                    password_digest AS passwordDigest`;
            const deletedUser = await connection.query(sql);
            connection.release();
            return deletedUser.rows[0];
        }
        catch (err) {
            throw new Error(`An error has occurred while deleting user with user_id of ${id}. Error: ${err}`);
        }
    }
}
exports.UserModel = UserModel;
