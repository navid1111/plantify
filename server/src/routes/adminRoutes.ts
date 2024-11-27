import { Router } from 'express';
import { createWeeklyRoutine } from '../controllers/adminController';

const router = Router();
router.post('/weekly-routines', createWeeklyRoutine);

export default router;
