import { Document, Schema, model } from 'mongoose';

export interface IWeeklyRoutine extends Document {
  weekNumber: number;
  tasks: string[]; // List of task descriptions
  plantType: string; // e.g., 'Tomato', 'Rose', etc.
}

const WeeklyRoutineSchema = new Schema<IWeeklyRoutine>({
  weekNumber: { type: Number, required: true },
  tasks: [{ type: String, required: true }],
  plantType: { type: String, required: true },
});

export default model<IWeeklyRoutine>('WeeklyRoutine', WeeklyRoutineSchema);
