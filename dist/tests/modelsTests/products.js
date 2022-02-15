"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../../models/product");
const product = new product_1.ProductModel();
function default_1() {
    describe('Product Model:', () => {
        const inputProduct = {
            name: 'Brownies',
            price: 100,
            category: 'Food',
        };
        const outputProduct = {
            id: 11,
            name: 'Brownies',
            price: 100,
            category: 'Food',
        };
        it('Should have an index method', () => {
            expect(product.index).toBeDefined();
        });
        it('Should have a show method', () => {
            expect(product.show).toBeDefined();
        });
        it('Should have a create method', () => {
            expect(product.create).toBeDefined();
        });
        it('Should have a delete method', () => {
            expect(product.destroy).toBeDefined();
        });
        it('Create method should add a Product', async () => {
            const result = await product.create(inputProduct);
            expect(result).toEqual(outputProduct);
        });
        it('Index method should contain the created Product (and more)', async () => {
            const result = await product.index();
            expect(result).toContain(outputProduct);
            expect(result.length).toEqual(11);
        });
        it('Show method should return the correct Product', async () => {
            const result = await product.show('11');
            expect(result).toEqual(outputProduct);
        });
        it('Destroy method should remove and return the Product', async () => {
            const deletedProduct = await product.destroy('11');
            expect(deletedProduct).toEqual(outputProduct);
            const result = await product.show('11');
            expect(result).toBeFalsy();
        });
    });
}
exports.default = default_1;
