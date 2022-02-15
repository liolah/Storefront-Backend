"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ordersServices_1 = require("../../services/ordersServices");
function default_1() {
    describe('Products Services:', () => {
        const activeOrders = [
            {
                id: 7,
                userId: 7,
                status: 'Active',
                products: [
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 8,
                        quantity: 47,
                    },
                    {
                        id: 9,
                        quantity: 47,
                    },
                    {
                        id: 10,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                ],
            },
        ];
        const completeOrders = [
            {
                id: 17,
                userId: 7,
                status: 'Complete',
                products: [
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                    {
                        id: 7,
                        quantity: 47,
                    },
                ],
            },
        ];
        it("Should have a function to get users' orders", () => {
            expect(ordersServices_1.getOrderByUserId).toBeDefined();
        });
        it('Should have a function to get the completed orders', () => {
            expect(ordersServices_1.completedOrders).toBeDefined();
        });
        it('getOrderByUserId should return a list of orders for a specific user ID', async () => {
            const result = await (0, ordersServices_1.getOrderByUserId)('7');
            expect(result).toEqual(activeOrders);
        });
        it('Completed Orders function should return a list of completed orders for a specific user', async () => {
            const result = await (0, ordersServices_1.completedOrders)('7');
            expect(result).toEqual(completeOrders);
        });
    });
}
exports.default = default_1;
