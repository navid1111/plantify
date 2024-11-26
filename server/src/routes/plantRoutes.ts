import { Router } from 'express';
import {
  addGrowthRecord,
  createPlant,
  getGrowthRecord,
  getPlants,
} from '../controllers/plantController';
import upload from '../middleware/uploadMiddleware';

const router = Router();
router.post('/', createPlant);
router.get('/user/:userId', getPlants);
router.post('/:plantId/growth', upload.single('image'), addGrowthRecord);
router.get('/:plantId/growth', getGrowthRecord);

export default router;
