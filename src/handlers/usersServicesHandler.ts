import { authenticate } from '../services/usersServices';
import { Request, Response } from 'express';

const login = async (req: Request, res: Response) => {
  try {
    const token = await authenticate(req.body.id, req.body.password);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
};

export { login };
