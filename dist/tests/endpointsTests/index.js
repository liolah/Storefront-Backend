"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
function default_1() {
    describe('API Endpoints:', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZF9kaWdlc3QiOiIkMmIkMTAkRWFaSm8yeDU3Snd5emxDajJCU0ZidU5ScVhvYmppZ0MwQjBNMEJNaUpYdVFxTGZvMURIdEsiLCJpYXQiOjE2NDQ5MzI0ODd9.wFrzB-u7NWlLOkAbWcgrma-CuNR0_3dVw_BISErtf0E';
        it('GET /', async () => {
            const response = await request.get('/');
            expect(response.status).toBe(200);
        });
        it('POST /login', async () => {
            const response = await request.post('/login').send({ id: '3', password: 'incorrect' });
            expect(response.status).toBe(200);
        });
        it('GET /users, without authToken', async () => {
            const response = await request.get('/users');
            expect(response.status).toBe(401);
        });
        it('GET /users, with authToken', async () => {
            const response = await request.get('/users').set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
        it('GET /users/:userId, without authToken', async () => {
            const response = await request.get('/users/1');
            expect(response.status).toBe(401);
        });
        it('GET /users/:userId, with authToken', async () => {
            const response = await request.get('/users/1').set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
        it('DELETE /users/:userId, without authToken (deleting another user)', async () => {
            const response = await request.delete('/users/3').send({ id: '1' });
            expect(response.status).toBe(401);
        });
        it('DELETE /users/:userId, with authToken (deleting another user)', async () => {
            const response = await request.delete('/users/3').send({ id: '1' }).set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(401);
        });
        it('DELETE /users/:userId, with authToken (deleting the authorized user)', async () => {
            const response = await request.delete('/users/1').send({ id: '1' }).set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
        it('POST /users, without authToken', async () => {
            const response = await request
                .post('/users')
                .send({ firstName: 'Hesham', lastName: 'Hany', password: 'Password' });
            expect(response.status).toBe(401);
        });
        it('POST /users, with authToken', async () => {
            const response = await request
                .post('/users')
                .send({ firstName: 'Hesham', lastName: 'Hany', password: 'Password' })
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
        it('GET /products', async () => {
            const response = await request.get('/products');
            expect(response.status).toBe(200);
        });
        it('GET /products/:productId', async () => {
            const response = await request.get('/products/5');
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                id: 5,
                name: 'product_5',
                price: 47,
                category: 'Power ups',
            });
        });
        it('GET /products/MostPopular', async () => {
            const response = await request.get('/products/MostPopular');
            expect(response.status).toBe(200);
        });
        it('GET /products/category/:categoryId', async () => {
            const response = await request.get('/products/category/gifts');
            expect(response.status).toBe(200);
            expect(response.body).toEqual([
                {
                    id: 8,
                    name: 'product_8',
                    price: 47,
                    category: 'Gifts',
                },
                {
                    id: 9,
                    name: 'product_9',
                    price: 47,
                    category: 'Gifts',
                },
                {
                    id: 10,
                    name: 'product_10',
                    price: 47,
                    category: 'Gifts',
                },
            ]);
        });
        it('POST /products, without authToken', async () => {
            const response = await request.post('/products').send({ name: 'blablabla', price: 47, category: 'blablabla' });
            expect(response.status).toBe(401);
        });
        it('POST /products, with authToken', async () => {
            const response = await request
                .post('/products')
                .send({ name: 'blablabla', price: 47, category: 'blablabla' })
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
        it('DELETE /products/:productId, without authToken', async () => {
            const response = await request.delete('/products/3');
            expect(response.status).toBe(401);
        });
        it('DELETE /products/:productId, with authToken', async () => {
            const response = await request.delete('/products/1').set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
        it("GET /user/:userId/orders (user's active orders), without authToken (viewing another user's orders)", async () => {
            const response = await request.get('/user/5/orders').send({ id: '3' });
            expect(response.status).toBe(401);
        });
        it("GET /user/:userId/orders (user's active orders), with authToken (viewing another user's orders)", async () => {
            const response = await request.get('/user/5/orders').send({ id: '3' }).set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(401);
        });
        it("GET /user/:userId/orders (user's active orders), with authToken", async () => {
            const response = await request.get('/user/3/orders').send({ id: '3' }).set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
        it("GET /user/:userId/orders/completed (user's completed orders), without authToken (viewing another user's orders)", async () => {
            const response = await request.get('/user/5/orders/completed').send({ id: '3' });
            expect(response.status).toBe(401);
        });
        it("GET /user/:userId/orders/completed (user's completed orders), with authToken (viewing another user's orders)", async () => {
            const response = await request
                .get('/user/5/orders/completed')
                .send({ id: '3' })
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(401);
        });
        it("GET /user/:userId/orders/completed (user's completed orders), with authToken", async () => {
            const response = await request
                .get('/user/3/orders/completed')
                .send({ id: '3' })
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
    });
}
exports.default = default_1;
