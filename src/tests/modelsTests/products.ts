import { ProductModel } from '../../models/product';

const product = new ProductModel();

export default function (): void {
  describe('Product Model:', () => {
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
      const result = await product.create({
        name: 'Brownies',
        price: 100,
        category: 'Food',
      });
      expect(result).toEqual({
        id: 11,
        name: 'Brownies',
        price: 100,
        category: 'Food',
      });
    });

    it('Index method should contain the created Product (and more)', async () => {
      const result = await product.index();
      expect(result).toContain({
        id: 11,
        name: 'Brownies',
        price: 100,
        category: 'Food',
      });
      expect(result.length).toEqual(11);
    });

    it('Show method should return the correct Product', async () => {
      const result = await product.show('11');
      expect(result).toEqual({
        id: 11,
        name: 'Brownies',
        price: 100,
        category: 'Food',
      });
    });

    it('Destroy method should remove and return the Product', async () => {
      const result = await product.destroy('11');
      expect(result).toEqual({
        id: 11,
        name: 'Brownies',
        price: 100,
        category: 'Food',
      });
    });
  });
}
