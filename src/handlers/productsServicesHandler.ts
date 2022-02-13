import { Request, Response } from 'express';
import productsServices from '../services/productsServices';

const mostPopularProducts = async (req: Request, res: Response) => {
  // 5 is passed since only the top five products are required.
  const products = await productsServices.getPopularProducts('5');
  res.json(products);
};

const getProductsByCategory = async (req: Request, res: Response) => {
  const products = await productsServices.getProductsByCategory(req.body.category);
  res.json(products);
};

export { mostPopularProducts, getProductsByCategory };
export default { mostPopularProducts, getProductsByCategory };
