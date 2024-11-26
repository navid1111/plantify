// src/models/Plant.ts
import mongoose, { Document, Schema, model } from 'mongoose';
import { IUser } from './Users';

export interface IGrowthRecord {
  date: Date;
  image: string;
  notes: string;
}

export interface IPlant extends Document {
  user: mongoose.Types.ObjectId | IUser; // Or mongoose.Types.ObjectId if you have the User model defined
  name: string;
  species?: string;
  tasks: string[]; // Array of Task IDs
  images: string[];
  growthRecords: IGrowthRecord[];
  seedingMonths?: number[];
  harvestMonths?: number[];
  createdAt: Date;
}

const GrowthRecordSchema = new Schema<IGrowthRecord>({
  date: { type: Date },
  image: { type: String },
  notes: { type: String },
});
const PlantSchema = new Schema<IPlant>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  species: { type: String },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  images: [{ type: String }],
  growthRecords: [GrowthRecordSchema],
  seedingMonths: [{ type: Number }],
  harvestMonths: [{ type: Number }],
  createdAt: { type: Date, default: Date.now },
});
export default model<IPlant>('Plant', PlantSchema);
