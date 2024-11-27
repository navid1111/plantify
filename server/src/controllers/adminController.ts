import { Request, Response } from 'express';
import WeeklyRoutine from '../models/WeeklyRoutine';

export const createWeeklyRoutine = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { weekNumber, plantType, tasks } = req.body;
    const routine = new WeeklyRoutine({ weekNumber, plantType, tasks });
    await routine.save();
    res.status(201).json({ message: 'Weekly routine was created' });
  } catch (error) {
    res
      .status(500)
      .json({ error: `error occured during creating weekly routine ${error}` });
  }
};
