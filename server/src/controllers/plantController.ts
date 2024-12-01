import { NextFunction, Request, Response } from 'express';
import Plant from '../models/Plant';

// Add this type declaration to resolve the TypeScript error
declare module 'express-serve-static-core' {
  interface Request {
    userId?: string;
    file?: {
      filename: string;
      path: string;
    };
  }
}

export const createPlant = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    console.log('Creating plant...');
    const { name, species, seedingMonths, harvestMonths } = req.body;
    const userId = req.userId;
    console.log('User ID:', userId);
    if (!userId) {
      console.log('User ID is required to create a plant');
      res.status(400).json({ message: 'Userid is required to create a plant' });
      return;
    }
    const newPlant = new Plant({
      user: userId,
      name,
      species,
      seedingMonths,
      harvestMonths,
    });
    console.log('Saving new plant:', newPlant);
    const savedPlant = await newPlant.save();
    console.log('Plant saved:', savedPlant);
    res.status(201).json(savedPlant);
  } catch (error) {
    console.error('Error creating plant:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while creating the plant.' });
  }
};

export const getPlants = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Fetching plants for user...');
    const userId = req.userId;
    console.log('User ID:', userId);
    if (!userId) {
      console.log('User ID is required to fetch plants');
      res.status(400).json({ message: 'UserId is required' });
      return;
    }
    const plants = await Plant.find({ user: userId });
    console.log('Plants found:', plants);
    res.status(200).json(plants);
  } catch (error) {
    console.error('Error fetching plants', error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching plants.' });
  }
};

export const addGrowthRecord = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    console.log('Adding growth record...');
    const { plantId } = req.params;
    const { notes } = req.body;

    console.log('req.file:', req.file); // Logs the file information
    console.log('req.body:', req.body); // Logs the text fields

    if (!req.file) {
      console.log('Image is required for growth record');
      res.status(400).json({ message: 'Image is required.' });
      return;
    }

    if (!notes) {
      console.log('Notes are required for growth record');
      res.status(400).json({ message: 'Notes are required.' });
      return;
    }

    console.log('Fetching plant with ID:', plantId);
    const plant = await Plant.findById(plantId);

    if (!plant) {
      console.log('Plant not found');
      res.status(404).json({ message: 'Plant not found.' });
      return;
    }

    console.log('Plant found:', plant);

    // Add the growth record
    plant.growthRecords.push({
      date: new Date(),
      image: `/uploads/${req.file.filename}`,
      notes,
    });

    console.log('Saving updated plant...');
    await plant.save();

    console.log('Plant updated successfully.');
    res.status(201).json({
      message: 'Growth record added successfully!',
      plant,
    });
  } catch (error) {
    console.error('Error in addGrowthRecord:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while adding the growth record.' });
  }
};

export const getGrowthRecord = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    console.log('Fetching growth records...');
    const { plantId } = req.params;
    const plant = await Plant.findById(plantId);
    if (!plant) {
      console.log('Plant not found');
      res.status(404).json({ message: 'plant not found' });
      return;
    }
    console.log('Growth records:', plant.growthRecords);
    res.status(200).json(plant.growthRecords);
  } catch (error) {
    console.error('Error in getGrowthRecord:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching growth records.' });
  }
};


