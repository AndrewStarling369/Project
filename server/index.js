"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_json_1 = __importDefault(require("./data.json"));
console.log('');
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded());
app.use(body_parser_1.default.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();
});
app.use('/assets', express_1.default.static('assets'));
app.get('/products', (req, res) => {
    if (Math.random() > 0.8) {
        res.status(500);
        res.send('ERROR');
        return;
    }
    let products = data_json_1.default.products;
    let search = req.query['search'];
    if (search) {
        products = products.filter((p) => p.productName
            .toLocaleLowerCase()
            .indexOf(search.toLocaleLowerCase()) !== -1);
    }
    res.contentType('application/json');
    res.json(products);
});
app.get('/product/:id', (req, res) => {
    let products = data_json_1.default.products;
    let id = +req.params['id'];
    let product = products.find((p) => p.productId === id);
    if (!product) {
        res.status(404);
        res.send('Product not found');
    }
    else {
        res.json(product);
    }
});
app.post('/product', (req, res) => {
    let products = data_json_1.default.products;
    products.push(req.body);
    res.status(200);
    res.end();
});
app.get('/product', (req, res) => {
    let products = data_json_1.default.products;
    let product = req.body;
    if (!product.productId) {
        product.productId =
            1 + products.reduce((m, p) => Math.max(p.productId, m), 0);
    }
    products.push(req.body);
    res.status(200);
    res.end();
});
app.delete('/product/:id', (req, res) => {
    let products = data_json_1.default.products;
    let id = +req.params['id'];
    data_json_1.default.products = data_json_1.default.products.filter((p) => p.productId !== id);
    res.status(200);
    res.end();
});
app.put('/product/:id', (req, res) => {
    let products = data_json_1.default.products;
    let id = +req.params['id'];
    let product = products.find((p) => p.productId === id);
    if (!product) {
        res.status(404);
        res.send('Product not found');
    }
    else {
        console.log(product);
        Object.assign(product, req.body);
        console.log(req.body);
        res.json(product);
    }
});
app.listen(3333);
setTimeout(() => Promise.resolve().then(() => __importStar(require('./test'))), 1000);
//# sourceMappingURL=index.js.map