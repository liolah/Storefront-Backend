export type Order = {
  id: number;
  userId: number;
  status: string;
};

export type DetailedOrder = {
  id: number;
  userId: number;
  products: { id: number; quantity: number }[];
  status: string;
};