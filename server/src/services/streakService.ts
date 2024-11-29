import Plant from '../models/Plant';
import Task from '../models/Task';
import { getCurrentWeekNumber } from '../utils/dateHelper'; // Custom function based on planting date

export const updateStreaks = async () => {
  const plants = await Plant.find({});

  for (const plant of plants) {
    // Use the plant's creation date (planting date) to calculate the current week
    const currentWeekNumber = getCurrentWeekNumber(plant.createdAt);

    // Find the tasks for the current week
    const tasks = await Task.find({
      plant: plant._id,
      weekNumber: currentWeekNumber,
    });

    // Check if all tasks are completed
    const allTaskCompleted = tasks.every(task => task.isCompleted);

    if (allTaskCompleted) {
      // Increment the current streak if all tasks are completed
      plant.streak.current = (plant.streak.current || 0) + 1;

      // Update the longest streak if the current streak exceeds the longest one
      if (plant.streak.current > (plant.streak.longest || 0)) {
        plant.streak.longest = plant.streak.current;
      }

      // Update lastCompletedDate to the current date
      plant.streak.lastCompletedDate = new Date();
    } else {
      // Reset the current streak if not all tasks are completed
      plant.streak.current = 0;
    }

    // Save the updated plant document
    await plant.save();
  }
};
