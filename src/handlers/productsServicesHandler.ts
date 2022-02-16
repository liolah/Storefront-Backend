import { Request, Response } from 'express';
import productsServices from '../services/productsServices';

const mostPopularProducts = async (req: Request, res: Response) => {
  try {
    // 5 is passed since only the top five products are required.
    const products = await productsServices.getPopularProducts('5');
    res.json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const products = await productsServices.getProductsByCategory(req.params.category);
    res.json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

export { mostPopularProducts, getProductsByCategory };
export default { mostPopularProducts, getProductsByCategory };
