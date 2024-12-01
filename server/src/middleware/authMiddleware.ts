import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Extend the Request interface to include userId
declare module 'express-serve-static-core' {
  interface Request {
    userId?: string;
  }
}

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.header('x-auth-token');

  if (!token) {
    res.status(401).json({ msg: 'No token, authorization denied' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    req.userId = decoded.userId; // This will now be type-safe
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authMiddleware;
