import mongoose from 'mongoose';
import Plant from '../models/Plant';
import Task from '../models/Task';
import WeeklyRoutine from '../models/WeeklyRoutine';
import { getCurrentWeekNumber, getEndofWeekDate } from '../utils/dateHelper';

export const assignWeeklyTasks = async () => {
  const currentWeek = getCurrentWeekNumber();
  const routines = await WeeklyRoutine.find({ weekNumber: currentWeek });
  console.log(currentWeek);

  for (const routine of routines) {
    const plants = await Plant.find({ name: routine.plantType });
    for (const plant of plants) {
      for (const description of routine.tasks) {
        const task = new Task({
          description,
          plant: plant._id,
          dueDate: getEndofWeekDate(),
          weekNumber: currentWeek,
          asignedByAdmin: true,
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
