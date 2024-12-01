import { Router } from 'express';
import {
  getTasksForTheWeek,
  getTotalPlants,
} from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();
router.get('/noOfPlants', authMiddleware, getTotalPlants);
router.get('/weeklyTasks', authMiddleware, getTasksForTheWeek);

export default router;
