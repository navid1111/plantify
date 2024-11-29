import { Router } from 'express';
import { check } from 'express-validator';
import { login, signUp } from '../controllers/authController';

const router = Router();

// Sign up route
router.post(
  '/signup',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password should be at least 6 characters').isLength({
      min: 6,
    }),
  ],
  signUp,
);

// Login route
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  login,
);

export default router;
