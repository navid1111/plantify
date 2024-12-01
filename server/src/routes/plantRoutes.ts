import { Router } from 'express';
import {
  addGrowthRecord,
  createPlant,
  getGrowthRecord,
  getPlants,
} from '../controllers/plantController';
import authMiddleware from '../middleware/authMiddleware';
import upload from '../middleware/uploadMiddleware';

const router = Router();
router.post('/', authMiddleware, createPlant);
router.get('/', authMiddleware, getPlants);
router.post('/:plantId/growth', upload.single('image'), addGrowthRecord);
router.get('/:plantId/growth', getGrowthRecord);

export default router;
