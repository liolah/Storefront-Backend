import express, { Request, Response } from 'express';
import { Product, ProductModel } from '../models/product';

const product = new ProductModel();

const index = async (_req: Request, res: Response) => {
  const products = await product.index();
  res.json(products);
}

const show = async (req: Request, res: Response) => {
  const requestedProduct = await product.show(req.query.id as string);
  res.json(requestedProduct);
}

const create = async (req: Request, res: Response) => {
  try {
    const newProduct: Product = {
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
}

  const destroy = async (req: Request, res: Response) => {
    const destroyedProduct = await product.destroy(req.query.id as string);
    
  }


export default { index, show, create, destroy};
