const cors = require('cors');
import dotenv from 'dotenv';
import express, { Application } from 'express';
import connectDB from './connectMongoDB';
import adminRouter from './routes/adminRoutes';
import authRouter from './routes/authRoutes';
import plantRouter from './routes/plantRoutes';
import taskRouter from './routes/taskRoutes';
import userRouter from './routes/userRoutes';
import './utils/cronJobs';

// Load environment variables
dotenv.config();

// Initialize the Express application
const app: Application = express();
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend URL
    methods: ['GET', 'POST'],
    credentials: true, // If you're using cookies or session-based authentication
  }),
);
connectDB();

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Server is running!');
});
app.use('/api/plants', plantRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);
app.use('/api/profile', userRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
