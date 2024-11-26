import { NextFunction, Request, Response } from 'express';
import Plant from '../models/Plant';

export const createPlant = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { name, species, seedingMonths, harvestMonths, userId } = req.body;
    if (!userId) {
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
    const savedPlant = await newPlant.save();
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
    const userId = req.params.userId;
    if (!userId) {
      res.status(400).json({ message: 'UserId is required' });
      return;
    }
    const plants = await Plant.find({ user: userId });
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
    const { plantId } = req.params;
    const { notes } = req.body;

    console.log('req.file:', req.file); // Logs the file information
    console.log('req.body:', req.body); // Logs the text fields

    if (!req.file) {
      res.status(400).json({ message: 'Image is required.' });
      return;
    }

    if (!notes) {
      res.status(400).json({ message: 'Notes are required.' });
      return;
    }

    console.log('Fetching plant with ID:', plantId);
    const plant = await Plant.findById(plantId);

    if (!plant) {
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
    const { plantId } = req.params;
    const plant = await Plant.findById(plantId);
    if (!plant) {
      res.status(404).json({ message: 'plant not found' });
      return;
    }
    res.status(200).json(plant.growthRecords);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching growth records.' });
  }
};
