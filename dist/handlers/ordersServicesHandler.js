"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completedOrders = exports.userOrders = void 0;
const ordersServices_1 = __importDefault(require("../services/ordersServices"));
const userOrders = async (req, res) => {
    const orders = await ordersServices_1.default.getOrderByUserId(req.params.userId);
    res.json(orders);
};
exports.userOrders = userOrders;
const completedOrders = async (req, res) => {
    const orders = await ordersServices_1.default.completedOrders(req.params.userId);
    res.json(orders);
};
exports.completedOrders = completedOrders;
exports.default = { userOrders, completedOrders };
