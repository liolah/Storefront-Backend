import { getOrderByUserId, completedOrders } from '../../services/ordersServices';

export default function (): void {
  describe('Orders Services:', () => {
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

    it("Should have a function to get users' active orders", () => {
      expect(getOrderByUserId).toBeDefined();
    });

    it('Should have a function to get the completed orders', () => {
      expect(completedOrders).toBeDefined();
    });

    it('getOrderByUserId should return a list of active orders for a specific user ID', async () => {
      const result = await getOrderByUserId('7');
      expect(result).toEqual(activeOrders);
    });

    it('Completed Orders function should return a list of completed orders for a specific user', async () => {
      const result = await completedOrders('7');
      expect(result).toEqual(completeOrders);
    });
  });
}
