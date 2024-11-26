import dotenv from 'dotenv';
import express, { Application } from 'express';
import connectDB from './connectMongoDB';
import plantRouter from './routes/plantRoutes';
import taskRouter from './routes/taskRoutes';

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
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
