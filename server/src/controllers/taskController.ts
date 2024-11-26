import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Plant from '../models/Plant';
import Task from '../models/Task';

export const createTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { plantId, description, dueDate } = req.body;

    const plant = await Plant.findById(plantId).populate('tasks');
    if (!plant) {
      res.status(404).json({ message: 'Plant not found' });
      return;
    }
    const task = new Task({
      description,
      dueDate,
      plant: plantId,
    });
    const savedTask = await task.save();

    (plant.tasks as mongoose.Types.ObjectId[]).push(
      savedTask._id as mongoose.Types.ObjectId,
    );
    res.status(200).json(savedTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while creating the task.' });
  }
};
export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const { plantId } = req.params;
    const tasks = await Task.find({ plant: plantId });
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching tasks.' });
  }
};
