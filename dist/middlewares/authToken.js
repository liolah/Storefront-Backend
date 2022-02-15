"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.verifyAuthToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
function verifyAuthToken(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch (error) {
        res.status(401).json('Access denied, invalid token');
    }
}
exports.verifyAuthToken = verifyAuthToken;
function authorize(req, res, next) {
    if (req.body.id == req.params.userId) {
        next();
    }
    else {
        res.status(401).json("Access denied. You don't have permission to carry this action on another user.");
    }
}
exports.authorize = authorize;
