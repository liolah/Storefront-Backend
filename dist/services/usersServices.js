"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.validatePassword = exports.encryptPassword = void 0;
const db_1 = __importDefault(require("../config/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const pepper = process.env.BCRYPT_PASSWORDS;
function encryptPassword(password) {
    return bcrypt_1.default.hashSync(password + pepper, saltRounds);
}
exports.encryptPassword = encryptPassword;
function validatePassword(password, passwordDigest) {
    return bcrypt_1.default.compareSync(password + pepper, passwordDigest);
}
exports.validatePassword = validatePassword;
async function authenticate(id, password) {
    const conn = await db_1.default.connect();
    const sql = ` SELECT 
                  id,
                  first_name AS "firstName",
                  last_name AS "lastName",
                  password_digest AS "passwordDigest"
                FROM
                  users WHERE id = ${id}`;
    const result = await conn.query(sql);
    if (result.rows.length) {
        const user = result.rows[0];
        if (validatePassword(password, user.passwordDigest)) {
            return jsonwebtoken_1.default.sign(user, process.env.TOKEN_SECRET);
        }
    }
    return null;
}
exports.authenticate = authenticate;
exports.default = { encryptPassword, validatePassword, authenticate };
