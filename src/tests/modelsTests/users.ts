import { UserModel } from '../../models/user';
import { User } from '../../@types/users';

const user = new UserModel();

export default function (): void {
  describe('User Model:', () => {
    let testUser: User;
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
      const result = await user.create({
        firstName: 'Hesham',
        lastName: 'Hany',
        password: 'VerySecurePassword',
      });
      expect(result).toEqual({
        id: 11,
        first_name: 'Hesham',
        last_name: 'Hany',
        password_digest: '$2b$10$YNscGDQtikcraoomwoKuxuzBeFenFc3VJHwtIZu9X7ZpgwTL78vdG',
      });
    });

    it('Index method should contain the created user (and more)', async () => {
      const result = await user.index();
      expect(result).toContain({
        id: 11,
        first_name: 'Hesham',
        last_name: 'Hany',
        password_digest: '$2b$10$YNscGDQtikcraoomwoKuxuzBeFenFc3VJHwtIZu9X7ZpgwTL78vdG',
      });
      expect(result.length).toEqual(11);
    });

    it('Show method should return the correct user', async () => {
      const result = await user.show('11');
      expect(result).toEqual({
        id: 11,
        first_name: 'Hesham',
        last_name: 'Hany',
        password_digest: '$2b$10$YNscGDQtikcraoomwoKuxuzBeFenFc3VJHwtIZu9X7ZpgwTL78vdG',
      });
    });

    it('Destroy method should remove and return the user', async () => {
      const result = await user.destroy('11');
      expect(result).toEqual({
        id: 11,
        first_name: 'Hesham',
        last_name: 'Hany',
        password_digest: '$2b$10$YNscGDQtikcraoomwoKuxuzBeFenFc3VJHwtIZu9X7ZpgwTL78vdG',
      });
    });
  });
}
