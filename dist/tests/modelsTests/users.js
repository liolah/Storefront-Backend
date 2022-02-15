"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const usersServices_1 = require("../../services/usersServices");
const user = new user_1.UserModel();
function default_1() {
    const inputUser = {
        firstName: 'Hesham',
        lastName: 'Hany',
        password: 'VerySecurePassword',
    };
    describe('User Model:', () => {
        it('Should have an index method', () => {
            expect(user.index).toBeDefined();
        });
        it('Should have a show method', () => {
            expect(user.show).toBeDefined();
        });
        it('Should have a create method', () => {
            expect(user.create).toBeDefined();
        });
        it('Should have a delete method', () => {
            expect(user.destroy).toBeDefined();
        });
        it('Create method should add a user', async () => {
            const result = await user.create(inputUser);
            expect({ a: result.firstName, b: result.lastName }).toEqual({ a: inputUser.firstName, b: inputUser.lastName });
            expect((0, usersServices_1.validatePassword)(inputUser.password, result.passwordDigest)).toBeTrue();
        });
        it('Index method should contain the created user (and more)', async () => {
            const result = await user.index();
            expect(result.length).toEqual(11);
        });
        it('Show method should return the correct user', async () => {
            const result = await user.show('11');
            expect({ a: result.firstName, b: result.lastName }).toEqual({ a: inputUser.firstName, b: inputUser.lastName });
            expect((0, usersServices_1.validatePassword)(inputUser.password, result.passwordDigest)).toBeTrue();
        });
        it('Destroy method should remove and return the user', async () => {
            const deletedUser = await user.destroy('11');
            expect({ a: deletedUser.firstName, b: deletedUser.lastName }).toEqual({
                a: inputUser.firstName,
                b: inputUser.lastName,
            });
            expect((0, usersServices_1.validatePassword)(inputUser.password, deletedUser.passwordDigest)).toBeTrue();
            const result = await user.show('11');
            expect(result).toBeFalsy();
        });
    });
}
exports.default = default_1;
