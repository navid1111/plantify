import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    if (!process.env.CONNECTION_URL) {
      throw new Error(
        'CONNECTION_URL is not defined in environment variables.',
      );
    }

    const conn = await mongoose.connect(process.env.CONNECTION_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error connecting to MongoDB: ${error?.message || error}`);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
