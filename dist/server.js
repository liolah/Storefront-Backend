"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
const address = `127.0.0.1:${port}`;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/', index_1.default);
app.get('/', function (req, res) {
    res.send('Welcome to the API!');
});
app.listen(port, function () {
    console.log(`Server started running on ${address}`);
});
exports.default = app;
