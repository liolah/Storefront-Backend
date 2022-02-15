"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const usersServices_1 = require("../services/usersServices");
const login = async (req, res) => {
    const token = await (0, usersServices_1.authenticate)(req.body.id, req.body.password);
    res.json(token);
};
exports.login = login;
