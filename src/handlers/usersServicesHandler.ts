import { authenticate } from '../services/usersServices';
import { Request, Response } from 'express';

const login = async (req: Request, res: Response) => {
  const token = await authenticate(req.body.id, req.body.password);
  res.json(token);
};

export { login };
