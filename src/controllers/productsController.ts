import { Request, Response } from 'express';
import { ProductModel } from '../models/product';
import { InputProduct } from '../@types/products';

const product = new ProductModel();

const index = async (_req: Request, res: Response) => {
  try {
    const products = await product.index();
    res.json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const requestedProduct = await product.show(req.params.productId);
    res.json(requestedProduct);
  } catch (err) {
    res.status(400).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const newProduct: InputProduct = {
      name: req.body.name as string,
      price: req.body.price as unknown as number,
      category: req.body.category as string,
    };
    const createdProduct = await product.create(newProduct);
    res.json(createdProduct);
  } catch (err) {
    res.status(400).json(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const destroyedProduct = await product.destroy(req.params.productId);
    res.json(destroyedProduct);
  } catch (err) {
    res.status(400).json(err);
  }
};

export { index, show, create, destroy };
export default { index, show, create, destroy };
