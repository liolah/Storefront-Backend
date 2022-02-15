"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("./apis/users"));
const products_1 = __importDefault(require("./apis/products"));
const orders_1 = __importDefault(require("./apis/orders"));
const authToken_1 = require("../middlewares/authToken");
const usersServicesHandler_1 = require("../handlers/usersServicesHandler");
const routes = (0, express_1.Router)();
routes.use('/users', authToken_1.verifyAuthToken, users_1.default);
routes.use('/products', products_1.default);
routes.post('/login', usersServicesHandler_1.login);
routes.use('/', authToken_1.verifyAuthToken, orders_1.default);
exports.default = routes;
