import dotenv from 'dotenv';
import express, { Application } from 'express';
import connectDB from './connectMongoDB';
import adminRouter from './routes/adminRoutes';
import plantRouter from './routes/plantRoutes';
import taskRouter from './routes/taskRoutes';
import './utils/cronJobs';

// Load environment variables
dotenv.config();

// Initialize the Express application
const app: Application = express();
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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
