"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authToken_1 = require("../../middlewares/authToken");
const productsController_1 = require("../../controllers/productsController");
const productsServicesHandler_1 = require("../../handlers/productsServicesHandler");
const routes = (0, express_1.Router)();
routes.get('/', productsController_1.index);
routes.get('/MostPopular', productsServicesHandler_1.mostPopularProducts);
routes.get('/category/:category', productsServicesHandler_1.getProductsByCategory);
routes.get('/:productId', productsController_1.show);
routes.post('/', authToken_1.verifyAuthToken, productsController_1.create);
routes.delete('/:productId', authToken_1.verifyAuthToken, productsController_1.destroy);
exports.default = routes;
