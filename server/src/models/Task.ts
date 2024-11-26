// models/Task.js
import { Document, Schema, Types, model } from 'mongoose';

export interface ITask extends Document {
  plant: Types.ObjectId;
  description: string;
  isCompleted: boolean;
  dueDate: Date;
  createdAt: Date;
}

const TaskSchema = new Schema<ITask>({
  plant: { type: Schema.Types.ObjectId, ref: 'Plant', required: true },
  description: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

export default model<ITask>('Task', TaskSchema);
