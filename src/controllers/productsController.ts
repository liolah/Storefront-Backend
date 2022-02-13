import express, { Request, Response } from 'express';
import { ProductModel } from '../models/product';
import { InputProduct } from '../@types/products';

const product = new ProductModel();

const index = async (_req: Request, res: Response) => {
  const products = await product.index();
  res.json(products);
};

const show = async (req: Request, res: Response) => {
  const requestedProduct = await product.show(req.params.productId);
  res.json(requestedProduct);
};

const create = async (req: Request, res: Response) => {
  try {
    const newProduct: InputProduct = {
      name: req.query.name as string,
      price: req.query.price as unknown as number,
      category: req.query.category as string,
    };

    // const validatedProduct = validatedProduct(newProduct);

    const createdProduct = await product.create(newProduct);
    res.json(createdProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  const destroyedProduct = await product.destroy(req.params.productId);
};

export { index, show, create, destroy };
export default { index, show, create, destroy };
