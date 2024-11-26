// src/models/User.ts
import { Document, model, Schema, Types } from 'mongoose';
import { IPlant } from './Plant'; // Import the Plant interface if needed for references

export interface IUser extends Document {
  username: string; // Unique username for the user
  email: string; // Unique email for the user
  password: string; // Hashed password
  streak: number; // Streak of days user performed tasks
  ranking: number; // User's ranking based on activity
  carbonFootprint: number; // Metric of user's impact on the environment
  plants: Types.ObjectId[] | IPlant[]; // Array of references to Plant documents
  createdAt: Date; // Timestamp when the user was created
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  streak: { type: Number, default: 0 },
  ranking: { type: Number, default: 0 },
  carbonFootprint: { type: Number, default: 0 },
  plants: [{ type: Schema.Types.ObjectId, ref: 'Plant' }],
  createdAt: { type: Date, default: Date.now },
});

export default model<IUser>('User', UserSchema);
