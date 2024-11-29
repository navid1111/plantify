import mongoose from 'mongoose';
import Plant from '../models/Plant';
import Task from '../models/Task';
import WeeklyRoutine from '../models/WeeklyRoutine';
import { getCurrentWeekNumber, getEndofWeekDate } from '../utils/dateHelper';

export const assignWeeklyTasks = async () => {
  const plants = await Plant.find({});

  for (const plant of plants) {
    const currentWeek = getCurrentWeekNumber(plant.createdAt);
    console.log(currentWeek); // Use planting date

    const routines = await WeeklyRoutine.find({
      weekNumber: currentWeek,
      plantType: plant.name,
    });
    for (const routine of routines) {
      for (const description of routine.tasks) {
        const task = new Task({
          description,
          plant: plant._id,
          dueDate: getEndofWeekDate(),
          weekNumber: currentWeek,
          assignedByAdmin: true,
        });

        const savedTask = await task.save();
        (plant.tasks as mongoose.Types.ObjectId[]).push(
          savedTask._id as mongoose.Types.ObjectId,
        );
      }
      await plant.save();
    }
  }
};
