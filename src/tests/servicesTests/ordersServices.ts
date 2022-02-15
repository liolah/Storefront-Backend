import { getOrderByUserId, completedOrders } from '../../services/ordersServices';

export default function (): void {
  describe('Products Services:', () => {
    const activeOrders = [
      {
        id: 7,
        userId: 7,
        status: 'Active',
        products: [
          {
            id: 7,
            quantity: 10,
          },
          {
            id: 8,
            quantity: 13,
          },
          {
            id: 9,
            quantity: 10,
          },
          {
            id: 10,
            quantity: 30,
          },
          {
            id: 7,
            quantity: 31,
          },
          {
            id: 7,
            quantity: 1,
          },
          {
            id: 7,
            quantity: 14,
          },
          {
            id: 7,
            quantity: 29,
          },
          {
            id: 7,
            quantity: 13,
          },
          {
            id: 7,
            quantity: 23,
          },
          {
            id: 7,
            quantity: 29,
          },
          {
            id: 7,
            quantity: 34,
          },
          {
            id: 7,
            quantity: 24,
          },
          {
            id: 7,
            quantity: 34,
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
            quantity: 27,
          },
          {
            id: 7,
            quantity: 24,
          },
          {
            id: 7,
            quantity: 9,
          },
          {
            id: 7,
            quantity: 31,
          },
        ],
      },
    ];

    it("Should have a function to get users' orders", () => {
      expect(getOrderByUserId).toBeDefined();
    });

    it('Should have a function to get the completed orders', () => {
      expect(completedOrders).toBeDefined();
    });

    it('getOrderByUserId should return a list of orders for a specific user ID', async () => {
      const result = await getOrderByUserId('7');
      expect(result).toEqual(activeOrders);
    });

    it('Completed Orders function should return a list of completed orders for a specific user', async () => {
      const result = await completedOrders('7');
      expect(result).toEqual(completeOrders);
    });
  });

}