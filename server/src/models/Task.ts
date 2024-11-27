// models/Task.js
import { Document, Schema, Types, model } from 'mongoose';

export interface ITask extends Document {
  plant: Types.ObjectId;
  asignedByAdmin: boolean;
  description: string;
  isCompleted: boolean;
  weekNumber: number;
  dueDate: Date;
  createdAt: Date;
}

const TaskSchema = new Schema<ITask>({
  plant: { type: Schema.Types.ObjectId, ref: 'Plant', required: true },
  description: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  asignedByAdmin: { type: Boolean, default: false },
  weekNumber: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

export default model<ITask>('Task', TaskSchema);
