"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../../controllers/usersController");
const routes = (0, express_1.Router)();
routes.get('/', usersController_1.index);
routes.get('/:userId', usersController_1.show);
routes.post('/', usersController_1.create);
routes.delete('/:userId', usersController_1.destroy);
exports.default = routes;
