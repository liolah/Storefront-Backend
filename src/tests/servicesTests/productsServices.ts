import { getPopularProducts, getProductsByCategory } from '../../services/productsServices';

export default function (): void {
  describe('Products Services:', () => {
    const popularProducts = [
      {
        id: 7,
        name: 'product_7',
        price: 47,
        category: 'Power ups',
        no_of_distinct_buyers: '10',
      },
      {
        id: 10,
        name: 'product_10',
        price: 47,
        category: 'Gifts',
        no_of_distinct_buyers: '10',
      },
      {
        id: 9,
        name: 'product_9',
        price: 47,
        category: 'Gifts',
        no_of_distinct_buyers: '9',
      },
      {
        id: 8,
        name: 'product_8',
        price: 47,
        category: 'Gifts',
        no_of_distinct_buyers: '8',
      },
      {
        id: 6,
        name: 'product_6',
        price: 47,
        category: 'Power ups',
        no_of_distinct_buyers: '6',
      },
    ];
    const powerUps = [
      {
        id: 5,
        name: 'product_5',
        price: 47,
        category: 'Power ups',
      },
      {
        id: 6,
        name: 'product_6',
        price: 47,
        category: 'Power ups',
      },
      {
        id: 7,
        name: 'product_7',
        price: 47,
        category: 'Power ups',
      },
    ];

    it('Should have a function to get the most popular products', () => {
      expect(getPopularProducts).toBeDefined();
    });

    it('Should have a function to get the products using their category', () => {
      expect(getProductsByCategory).toBeDefined();
    });

    it('getPopularProducts should return a list of the most popular products', async () => {
      const result = await getPopularProducts('5');
      expect(result).toEqual(popularProducts);
    });

    it('getProductsByCategory should return a products list with a specific category', async () => {
      const result = await getProductsByCategory('Power ups');
      expect(result).toEqual(powerUps);
    });
  });
}
