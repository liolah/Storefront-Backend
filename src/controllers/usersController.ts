import express, { Request, Response } from 'express';
import { UserModel } from '../models/user';
import { User } from '../@types/users';

const user = new UserModel();

const index = async (_req: Request, res: Response) => {
  const users = await user.index();
  res.json(users);
};

const show = async (req: Request, res: Response) => {
  const requestedUser = await user.show(req.query.id as string);
  res.json(requestedUser);
};

const create = async (req: Request, res: Response) => {
  try {
    const newUser: User = {
      name: req.query.name as string,
      price: req.query.price as unknown as number,
      category: req.query.category as string,
    };

    // const validatedUser = validatedUser(newUser);

    const createdUser = await User.create(newUser);
    res.json(createdUser);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  const destroyedUser = await User.destroy(req.query.id as string);
};

export default { index, show, create, destroy };