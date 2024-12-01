import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../models/Users';

// Sign up handler (same for both admin and user)
export const signUp = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { username, email, password, role = 'user' } = req.body; // Default role is 'user'
  console.log(req.body);

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ msg: 'User already exists' });
      return;
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    user = new User({
      username,
      email,
      password: hashedPassword,
      role, // Set the role (either 'user' or 'admin')
    });

    // Save the user to the database
    await user.save();

    // Generate a JWT token
    const payload = { userId: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: '20h',
    });

    // Send the token in the response
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Login handler (same for both admin and user)
export const login = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ msg: 'Invalid credentials' });
      return;
    }

    // Compare the entered password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ msg: 'Invalid credentials' });
      return;
    }

    // Generate a JWT token
    const payload = { userId: user._id, role: user.role }; // Include role in the payload
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });

    // Send the token in the response
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
