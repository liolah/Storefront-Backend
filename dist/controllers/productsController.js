"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.create = exports.show = exports.index = void 0;
const product_1 = require("../models/product");
const product = new product_1.ProductModel();
const index = async (_req, res) => {
    const products = await product.index();
    res.json(products);
};
exports.index = index;
const show = async (req, res) => {
    const requestedProduct = await product.show(req.params.productId);
    res.json(requestedProduct);
};
exports.show = show;
const create = async (req, res) => {
    try {
        const newProduct = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        };
        // const validatedProduct = validatedProduct(newProduct);
        const createdProduct = await product.create(newProduct);
        res.json(createdProduct);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
exports.create = create;
const destroy = async (req, res) => {
    const destroyedProduct = await product.destroy(req.params.productId);
    res.json(destroyedProduct);
};
exports.destroy = destroy;
exports.default = { index, show, create, destroy };
