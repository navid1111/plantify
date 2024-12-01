import { Request, Response } from 'express';
import Plant from '../models/Plant'; // assuming you have a Plant model
import WeeklyRoutine from '../models/WeeklyRoutine';
import { getCurrentWeekNumber } from '../utils/dateHelper';

export const getTotalPlants = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    // Get userId from the authenticated user (assuming req.userId is populated by middleware)
    const userId = req.userId; // If userId is stored in req.userId

    // Validate that userId exists
    if (!userId) {
      res.status(400).json({ error: 'User ID is required' });
      return;
    }
    console.log('User ID:', userId); // Log userId to ensure it's being passed correctly

    // Query the Plant collection to find plants owned by the user
    const totalPlants = await Plant.countDocuments({ user: userId }); // Assuming userId is a reference in the Plant model

    // Respond with the total count
    res.status(200).json({ totalPlants });
  } catch (error) {
    // Handle errors (e.g., database errors)
    res.status(500).json({
      error: `An error occurred while fetching total plants: ${error}`,
    });
  }
};
export const getTasksForTheWeek = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userId = req.userId;
    // Assuming the userId is set in the request (perhaps via middleware)

    // Find all plants for the user
    const plants = await Plant.find({ user: userId });

    // Initialize an array to collect all tasks
    const allTasks = [];

    // Loop through the plants and fetch tasks for each
    for (const plant of plants) {
      const weekNumber = getCurrentWeekNumber(plant.createdAt);
      console.log(weekNumber + plant.name);
      // Fetch tasks for the current plant
      const tasks = await WeeklyRoutine.find({
        plantType: plant.name,
        weekNumber: weekNumber,
      });

      // Add the tasks to the allTasks array
      allTasks.push(...tasks);
    }

    // Send the tasks as the response
    res.status(200).json(allTasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching tasks.' });
  }
};
