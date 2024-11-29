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
  role: 'user' | 'admin'; // Role field to differentiate between users and admins
  createdAt: Date; // Timestamp when the user was created
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  ranking: { type: Number, default: 0 },
  carbonFootprint: { type: Number, default: 0 },
  plants: [{ type: Schema.Types.ObjectId, ref: 'Plant' }],

  // Role field to differentiate between user and admin
  role: { type: String, default: 'user', enum: ['user', 'admin'] },

  createdAt: { type: Date, default: Date.now },
});

export default model<IUser>('User', UserSchema);
