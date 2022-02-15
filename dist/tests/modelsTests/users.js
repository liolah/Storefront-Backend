"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const user = new user_1.UserModel();
function default_1() {
    const inputUser = {
        firstName: 'Hesham',
        lastName: 'Hany',
        password: 'VerySecurePassword',
    };
    const outputUser = {
        id: 11,
        firstName: 'Hesham',
        lastName: 'Hany',
        passwordDigest: '$2b$10$8WvgwZsH3XI2rQCjaYODJeCElB9XSlXNO/eoAXKMz39fzrTqRFhMy',
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
            expect(result).toEqual(outputUser);
        });
        it('Index method should contain the created user (and more)', async () => {
            const result = await user.index();
            expect(result).toContain(outputUser);
            expect(result.length).toEqual(11);
        });
        it('Show method should return the correct user', async () => {
            const result = await user.show('11');
            expect(result).toEqual(outputUser);
        });
        it('Destroy method should remove and return the user', async () => {
            const deletedUser = await user.destroy('11');
            expect(deletedUser).toEqual(outputUser);
            const result = await user.show('11');
            expect(result).toBeFalsy();
        });
    });
}
exports.default = default_1;
