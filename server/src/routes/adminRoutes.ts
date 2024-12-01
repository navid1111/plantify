import { Router } from 'express';
import { createWeeklyRoutine } from '../controllers/adminController';
import { isAdmin } from '../middleware/adminMiddleware';

const router = Router();
router.post('/weekly-routines',isAdmin, createWeeklyRoutine);

export default router;
