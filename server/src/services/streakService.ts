import Plant from '../models/Plant';
import Task from '../models/Task';
import { getCurrentWeekNumber } from '../utils/dateHelper';
export const updateStreaks = async () => {
  const currentWeekNumber = getCurrentWeekNumber();
  const plants = await Plant.find({});

  for (const plant of plants) {
    const tasks = await Task.find({
      plant: plant._id,
      weekNumber: currentWeekNumber,
    });

    const allTaskCompleted = tasks.every(task => task.isCompleted);

    if (allTaskCompleted) {
      // Increment current streak
      plant.streak.current = (plant.streak.current || 0) + 1;

      // Update longest streak if current exceeds longest
      if (plant.streak.current > (plant.streak.longest || 0)) {
        plant.streak.longest = plant.streak.current;
      }

      // Update lastCompletedDate to now
      plant.streak.lastCompletedDate = new Date();
    } else {
      // Reset current streak
      plant.streak.current = 0;

      // Optionally, you can update lastCompletedDate or leave it as is
    }

    await plant.save();
  }
};
