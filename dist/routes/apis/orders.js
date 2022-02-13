"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderServicesHandler_1 = require("../../handlers/orderServicesHandler");
const routes = (0, express_1.Router)();
routes.get('/', orderServicesHandler_1.userOrders);
routes.get('/completed', orderServicesHandler_1.completedOrders);
exports.default = routes;
