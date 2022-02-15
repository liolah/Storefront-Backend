"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordersServicesHandler_1 = require("../../handlers/ordersServicesHandler");
const authToken_1 = require("../../middlewares/authToken");
const routes = (0, express_1.Router)();
routes.get('/user/:userId/orders', authToken_1.authorize, ordersServicesHandler_1.userOrders);
routes.get('/user/:userId/orders/completed', authToken_1.authorize, ordersServicesHandler_1.completedOrders);
exports.default = routes;
