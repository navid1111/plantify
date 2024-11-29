import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Admin authorization middleware
export const isAdmin = (
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
      role: string;
    };
    req.user = decoded.userId; // Attach user ID to the request object
    if (decoded.role !== 'admin') {
      res.status(403).json({ msg: 'Access denied, admin only' });
      return;
    }
    next(); // If the user is admin, continue to the next middleware/route
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
