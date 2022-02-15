"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./modelsTests/products"));
const users_1 = __importDefault(require("./modelsTests/users"));
const productsServices_1 = __importDefault(require("./servicesTests/productsServices"));
const ordersServices_1 = __importDefault(require("./servicesTests/ordersServices"));
const index_1 = __importDefault(require("./endpointsTests/index"));
(0, products_1.default)();
(0, users_1.default)();
(0, productsServices_1.default)();
(0, ordersServices_1.default)();
(0, index_1.default)();
