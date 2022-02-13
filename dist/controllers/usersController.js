"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.create = exports.show = exports.index = void 0;
const user_1 = require("../models/user");
const user = new user_1.UserModel();
const index = async (_req, res) => {
    const users = await user.index();
    res.json(users);
};
exports.index = index;
const show = async (req, res) => {
    const requestedUser = await user.show(req.params.userId);
    res.json(requestedUser);
};
exports.show = show;
const create = async (req, res) => {
    try {
        const newUser = {
            firstName: req.query.firstName,
            lastName: req.query.lastName,
            password: req.query.password
        };
        // const validatedUser = validatedUser(newUser);
        const createdUser = await user.create(newUser);
        res.json(createdUser);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
exports.create = create;
const destroy = async (req, res) => {
    const destroyedUser = await user.destroy(req.params.userId);
};
exports.destroy = destroy;
exports.default = { index, show, create, destroy };
