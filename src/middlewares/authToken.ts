import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

function verifyAuthToken(req: Request, res: Response, next: NextFunction) {
  try {
    const authorizationHeader = req.headers.authorization as string;
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET as string);

    next();
  } catch (error) {
    res.status(401).json('Access denied, invalid token');
  }
}

function authorize(req: Request, res: Response, next: NextFunction) {
  if (req.body.id == req.params.userId) {
    next();
  } else {
    res.status(401).json("Access denied. You don't have permission to carry this action on another user.");
  }
}

export { verifyAuthToken, authorize };
