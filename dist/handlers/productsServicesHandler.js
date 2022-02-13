"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = exports.mostPopularProducts = void 0;
const productsServices_1 = __importDefault(require("../services/productsServices"));
const mostPopularProducts = async (req, res) => {
    // 5 is passed since only the top five products are required.
    const products = await productsServices_1.default.getPopularProducts('5');
    res.json(products);
};
exports.mostPopularProducts = mostPopularProducts;
const getProductsByCategory = async (req, res) => {
    const products = await productsServices_1.default.getProductsByCategory(req.body.category);
    res.json(products);
};
exports.getProductsByCategory = getProductsByCategory;
exports.default = { mostPopularProducts, getProductsByCategory };
