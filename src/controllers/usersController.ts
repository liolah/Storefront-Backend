import { Request, Response } from 'express';
import { UserModel } from '../models/user';
import { InputUser } from '../@types/users';

const user = new UserModel();

const index = async (_req: Request, res: Response) => {
  const users = await user.index();
  res.json(users);
};

const show = async (req: Request, res: Response) => {
  const requestedUser = await user.show(req.params.userId);
  res.json(requestedUser);
};

const create = async (req: Request, res: Response) => {
  try {
    const newUser: InputUser = {
      firstName: req.query.firstName as string,
      lastName: req.query.lastName as string,
      password: req.query.password as string
    };

    // const validatedUser = validatedUser(newUser);

    const createdUser = await user.create(newUser);
    res.json(createdUser);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  const destroyedUser = await user.destroy(req.params.userId);
};

export { index, show, create, destroy };
export default { index, show, create, destroy };