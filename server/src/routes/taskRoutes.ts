import { Router } from 'express';
import {
  createTask,
  getAdminTasksForCurrentWeek,
  getTasks,
} from '../controllers/taskController';

const router = Router();

router.post('/', createTask);
router.get('/:plantId', getTasks);
router.get('dueTasks/:plantId', getAdminTasksForCurrentWeek);

export default router;
